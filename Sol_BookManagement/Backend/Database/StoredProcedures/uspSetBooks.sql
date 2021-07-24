--USE Book;

CREATE PROCEDURE uspSetBooks
	@Command Varchar(100)=NULL,

	@BookIdentity UNIQUEIDENTIFIER=NULL,
	@BookName Varchar(100)=NULL,
	@Auther Varchar(50)=NULL,

	@Quantity int=NULL,
	@Price money=NULL,

	@PublishDate Date=NULL
AS

	DECLARE @ErrorMessage Varchar(MAX);

	IF @Command='Create-Book'
		BEGIN
			BEGIN TRY
				
				BEGIN TRANSACTION

					INSERT INTO Books
					(
						BookIdentity,
						BookName,
						Auther,
						Quantity,
						Price,
						PublishDate
					)
					VALUES
					(
						NEWID(),
						@BookName,
						@Auther,
						@Quantity,
						@Price,
						@PublishDate
					)

				COMMIT TRANSACTION
			END TRY

			BEGIN CATCH 
				SET @ErrorMessage=ERROR_MESSAGE();
				RAISERROR(@ErrorMessage,16,1);
				ROLLBACK TRANSACTION
			END CATCH
		END

	IF @Command='Update-Book'
		BEGIN
			BEGIN TRY
				
				BEGIN TRANSACTION

					UPDATE Books
						SET 
							BookName=@BookName,
							Auther=@Auther,
							Quantity=@Quantity,
							Price=@Price,
							PublishDate=@PublishDate
						WHERE
							BookIdentity=@BookIdentity

				COMMIT TRANSACTION
			END TRY

			BEGIN CATCH 
				SET @ErrorMessage=ERROR_MESSAGE();
				RAISERROR(@ErrorMessage,16,1);
				ROLLBACK TRANSACTION
			END CATCH
		END

	IF @Command='Remove-Book'
		BEGIN
			BEGIN TRY
				
				BEGIN TRANSACTION

					DELETE FROM Books WHERE BookIdentity=@BookIdentity

				COMMIT TRANSACTION
			END TRY

			BEGIN CATCH 
				SET @ErrorMessage=ERROR_MESSAGE();
				RAISERROR(@ErrorMessage,16,1);
				ROLLBACK TRANSACTION
			END CATCH
		END

GO

