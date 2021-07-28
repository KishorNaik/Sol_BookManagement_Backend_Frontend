--USE Book;

CREATE PROCEDURE uspGetBooks
	@Command Varchar(100)=NULL
AS

	DECLARE @ErrorMessage Varchar(MAX);

	IF @Command='Get-Books'
		BEGIN
			BEGIN TRY
				
				BEGIN TRANSACTION

					SELECT 
                        B.BookIdentity,
                        B.BookName,
                        B.Auther,
                        B.PublishDate,
                        B.Quantity,
                        B.Price
                    FROM 
                        Books As B WITH(NOLOCK)
                    

				COMMIT TRANSACTION
			END TRY

			BEGIN CATCH 
				SET @ErrorMessage=ERROR_MESSAGE();
				RAISERROR(@ErrorMessage,16,1);
				ROLLBACK TRANSACTION
			END CATCH
		END

	
GO

