function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function saveGameResult(playerChoice, computerChoice, result) {
  var sheet = SpreadsheetApp.openById("IDSheet คุณนะครับ").getSheetByName("GameResults");
  sheet.appendRow([new Date(), playerChoice, computerChoice, result]);
  
  return "บันทึกผลเกมเรียบร้อย!";
}
