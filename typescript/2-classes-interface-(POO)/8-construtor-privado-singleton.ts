//Singleton = GoF
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private pass: string
  ) {}

  connect() {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.pass}`);
  }

  static getDatabase(host: string, user: string, pass: string): Database {
    if (Database.database) {
      console.log("Retornando instância!");
      return Database.database;
    }

    console.log("Criando nova instância!");
    Database.database = new Database(host, user, pass);
    return Database.database;
  }
}

const db = Database.getDatabase("localhost", "vidanova", "1234546");
db.connect();

const db1 = Database.getDatabase("localhost", "vidanova", "1234546");
db1.connect();
