USE Book;

CREATE TABLE Books(
    BookId Numeric(18,0) IDENTITY(1,1) PRIMARY KEY,
    BookIdentity UNIQUEIDENTIFIER,
    BookName Varchar(100),
    Auther Varchar(50),
    Quantity int,
    Price money,
    PublishDate DATETIME
)