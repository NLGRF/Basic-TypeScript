class Windows{
  static width:number;
  static height:number;
  static showWidth():void{
    console.log("Width :"+Windows.width);
  }
  static showheight():void{
    console.log("Height :"+Windows.height);
  }
}
Windows.width=1024;
Windows.height=768;
Windows.showWidth();
Windows.showheight();
