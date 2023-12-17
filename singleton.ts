class Database {
    private static instance: Database;
    private static exists: boolean = false;
    private data: string;
  
    private constructor(data: string) {
      this.data = data;
    }
  
    static getInstance(data: string): Database {
      if (!Database.exists) {
        Database.instance = new Database(data);
        Database.exists = true;
      }
      return Database.instance;
    }
  
    getData(): string {
      return this.data;
    }
  }
  
  const mongo = Database.getInstance('MongoDB');
  console.log(mongo.getData());
  
  const mysql = Database.getInstance('MySQL');
  console.log(mysql.getData());
  