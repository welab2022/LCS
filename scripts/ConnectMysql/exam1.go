package main
 
import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
)
 
func main() {
     
    // create a database object which can be used
    // to connect with database.
    db, err := sql.Open("mysql", "<username>:<password>@tcp(<host>:<port>)/<namedb>")
     
    // handle error, if any.
    if err != nil {
        panic(err)
    }
     
    _, err = db.Exec("CREATE TABLE userGolang(id INT NOT NULL, name VARCHAR(20), PRIMARY KEY (ID));")
     
    // handle error
    if err != nil {
        panic(err)
    }
     
    fmt.Print("Successfully Created\n")
     
    // database object has  a method Close,
    // which is used to free the resource.
    // Free the resource when the function
    // is returned.
    defer db.Close()
}