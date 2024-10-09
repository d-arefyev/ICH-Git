class User {
  private password: string;

  constructor(pass: string){
      this.password = pass;
  }

  public setPassword(pass: string){
      this.password = pass;
  }

  public checkPassword(pass: string): boolean{
      const isCheck = this.password === pass;
      console.log(`Пароль ${isCheck ? 'совпадает' : 'не совпадает'}`)
      return isCheck;
  }
}

const user = new User('123456789');
user.setPassword('987654321');
// user.checkPassword('123456789');
user.checkPassword('987654321');