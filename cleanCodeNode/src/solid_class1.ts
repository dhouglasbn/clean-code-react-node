// SOLID

/*
* - Single Responsability Principle (SRP)
* Each part of our program must have one single responsability
* [If I have a method that registers my user and send email. it violates SRP]
* 
* - Open Closed Principle (OCP)
* Our classes/methods must be open to extension but never for modification
* [If I have a method that calculates shipping, and it has an if for amazon
* shipping, later it have an if for shopee shipping, i'll have to modificate
* every time a have a new option of shipping. it violates OCP]
* 
* - Liskov Substitution Principle (LSP)
* A dependency can be substituted by another one if they have the same format
* [My app works with PostgresSQL, and I use a repository that has it own methods,
* if then I use MongoDB or MySQL that has the same methods, my app should not depend
* on Postgres service]
* 
* - Interface Segregation Principle (ISP)
* We should segregate our interface rules
* [If i have a Printer that scans & prints, ou should have two interfaces for scanning
* and printing, so I can have a printer that only prints and a printer that prints & scans]
* 
* - Dependency Inversion Principle (DIP)
* The dependencies of a class must be inverted from the traditional model
* [
* function createUser() {
*   createUserOnDatabase()
* }
* 
* ---
* 
* function createUser(
*   createUserOnDatabase: 90 => void
* ) {
*   createUserOnDatabase()
* }
* 
* import { createUserOnDatabase } from 'db'
* 
* createUser(
*   createUserOnDatabase
* )
* ]
*/