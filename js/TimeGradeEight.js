console.groupCollapsed("\n%c  %c晚修时钟 Evening self-study clock", "background:url('./favicon.ico') no-repeat;padding:32px;", "font:bold 36px sans-serif;color:#3a9;");
console.log("\n项目仓库：https://gitee.com/txecyhy/txec-eveningself-studyclock\n作者QQ：3586638355\n\n");
console.groupEnd();
/* 
 * 适用于塘厦第二初级中学的晚修科目列表
 */

let specialDate = {
  gone22: parseInt((Date.now() - new Date(2022, 5, 9)) / 864E5),
  cee24: parseInt((new Date(2024, 5, 8) - Date.now()) / 864E5),
}

exams["2024-04-22"] = {
  type: "自主反馈",
  //mainSlogan: `${specialDate.cee24}天后 峰顶相会`,    这里可选期中、期末考试
  schedule() {
    $("考练", today.date, "22:30", "23:30");
  }
};

exams[24] = {
  type: "周一晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `请把你的作业写完`,
  rollSlogan: ["awa"],
  earlyAdmit: 2,
  schedule() {
    $("生物", today.date, "18:50", "19:10");
    $("数学", today.date, "19:10", "19:55");
    $("物理", today.date, "19:55", "20:20");
    $("课间", today.date, "20:20", "20:30");
    $("英语", today.date, "20:30", "21:00");
    $("语文", today.date, "21:00", "21:30");
    }
  }
exams[241] = {
  type: "周二晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `蛋生蛋🥚`,
  rollSlogan: ["🥚 Egg"],
  schedule() {
    $("语字", today.date, "18:50", "19:10");
    $("数学", today.date, "19:10", "19:55");
    $("物理", today.date, "19:55", "20:20");
    $("课间", today.date, "20:20", "20:30");
    $("英语", today.date, "20:30", "21:00");
    $("语文", today.date, "21:00", "21:30");
  }
};
exams[242] = {
  type: "周三晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `还有两天!`,
  rollSlogan: ["awa"],
  schedule() {
    $("地理", today.date, "18:50", "19:10");
    $("数学", today.date, "19:10", "19:55");
    $("物理", today.date, "19:55", "20:20");
    $("课间", today.date, "20:20", "20:30");
    $("英语", today.date, "20:30", "21:00");
    $("语文", today.date, "21:00", "21:30");
  }
};
exams[251] = {
  type: "单周周四晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `awa`,
  rollSlogan: ["man"],
  schedule() {
    $("语字", today.date, "18:50", "19:20");
    $("数学", today.date, "19:20", "19:55");
    $("物理", today.date, "19:55", "20:20");
    $("课间", today.date, "20:20", "20:30");
    $("英语", today.date, "20:30", "21:00");
    $("语文", today.date, "21:00", "21:30");
  }
};
exams[252] = {
  type: "(双周)周四晚修",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `学习新思想，争做新青年！`,
  rollSlogan: ["woof cool！🐺"],
  schedule() {
    $("历史", today.date, "18:50", "19:20");
    $("数学", today.date, "19:20", "19:55");
    $("物理", today.date, "19:55", "20:20");
    $("课间", today.date, "20:20", "20:30");
    $("英语", today.date, "20:30", "21:00");
    $("语文", today.date, "21:00", "21:30");
  }
};
exams[261] = {
  type: "(单周)自主反馈",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `nihao`,
  rollSlogan: ["awa"],
  schedule() {
    $("数学", today.date, "18:30", "19:10");
    $("道法", today.date, "19:10", "19:40");
    $("物理", today.date, "19:40", "20:20");
    $("课间", today.date, "20:20", "20:30");
    $("语文", today.date, "20:30", "21:30");
  }
};
exams[262] = {
  type: "双周自主反馈",
  author: "二初",
  origin: "TXEC",
  Mentor:'ZP',
  mainSlogan: `ahha`,
  rollSlogan: ["awa"],
  schedule() {
    $("数学", today.date, "18:30", "19:30");
    $("英语", today.date, "19:30", "20:20");
    $("课间", today.date, "20:20", "20:30");
    $("地理", today.date, "20:30", "21:00");
    $("生物", today.date, "21:00", "21:30");
  }
};