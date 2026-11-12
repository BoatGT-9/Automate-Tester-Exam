const URL = "https://portal.uat.gofive.co.th/Register/empeo";

describe("Register", () => {
  it("should register a new user", () => {
    cy.on("uncaught:exception", (err) => {
      console.error("Application Error:", err);
      console.error("Error Stack:", err.stack);

      return false;
    });
    cy.fixture("data.json").then((data) => {
      cy.visit(URL);

      // Verify page
      cy.url().should("include", "/Register/empeo");
      cy.get("body").should("be.visible");

      cy.contains("อื่นๆ").click();

      cy.xpath("//input[@placeholder='ชื่อบริษัท*']")
        .click()
        .type(data.namecompany);

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[2]",
      ).click();
      cy.contains("บริการด้านไอที").click();

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[3]",
      ).click();
      cy.contains("21-50").click();

      cy.xpath("//input[@placeholder='อีเมล*']").click().type(data.email);
      cy.xpath("//input[@placeholder='ชื่อ*']").click().type(data.firstName);
      cy.xpath("//input[@placeholder='นามสกุล*']").click().type(data.lastName);
      cy.xpath("//input[@placeholder='เบอร์มือถือ*']").click().type(data.phone);
      cy.contains("ใช้โค้ดส่วนลด").click();
      cy.xpath("//input[@placeholder='รหัสส่วนลด']")
        .click()
        .type(data.promoCode);
      cy.contains("ใช้โค้ด").click();
      cy.xpath("//input[@type='checkbox']").click();
      cy.xpath("//button[@type='submit']").click();
      cy.wait(2000);
      cy.checkOTP();
      cy.fillOTP(data.otp);
      cy.contains("ยืนยัน").click();
      cy.wait(2000);
    });
  });

  it("should display validation errors for required fields", () => {
    cy.on("uncaught:exception", (err) => {
      console.error("Application Error:", err);
      console.error("Error Stack:", err.stack);

      return false;
    });
    cy.fixture("data.json").then((data) => {
      cy.visit(URL);

      // Verify page
      cy.url().should("include", "/Register/empeo");
      cy.get("body").should("be.visible");

      cy.contains("อื่นๆ").click();

      cy.xpath("//button[@type='submit']").click();
      cy.wait(2000);
      
    });
  });


  it("should display validation error for invalid email", () => {
    cy.on("uncaught:exception", (err) => {
      console.error("Application Error:", err);
      console.error("Error Stack:", err.stack);

      return false;
    });
    cy.fixture("data.json").then((data) => {
      cy.visit(URL);

      // Verify page
      cy.url().should("include", "/Register/empeo");
      cy.get("body").should("be.visible");

      cy.contains("อื่นๆ").click();

      cy.xpath("//input[@placeholder='ชื่อบริษัท*']")
        .click()
        .type(data.namecompany);

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[2]",
      ).click();
      cy.contains("บริการด้านไอที").click();

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[3]",
      ).click();
      cy.contains("21-50").click();

      cy.xpath("//input[@placeholder='อีเมล*']").click().type("Test@gmail.com");
      cy.xpath("//input[@placeholder='ชื่อ*']").click().type(data.firstName);
      cy.xpath("//input[@placeholder='นามสกุล*']").click().type(data.lastName);
      cy.xpath("//input[@placeholder='เบอร์มือถือ*']").click().type(data.phone);
      cy.contains("ใช้โค้ดส่วนลด").click();
      cy.xpath("//input[@placeholder='รหัสส่วนลด']")
        .click()
        .type(data.promoCode);
      cy.contains("ใช้โค้ด").click();
      cy.xpath("//input[@type='checkbox']").click();
    //   cy.xpath("//button[@type='submit']").click();
    });
  });

  it("Should display a validation error if the email address is invalid, and the user should be directed to the login page.", () => {
    cy.on("uncaught:exception", (err) => {
      console.error("Application Error:", err);
      console.error("Error Stack:", err.stack);

      return false;
    });
    cy.fixture("data.json").then((data) => {
      cy.visit(URL);

      // Verify page
      cy.url().should("include", "/Register/empeo");
      cy.get("body").should("be.visible");

      cy.contains("อื่นๆ").click();

      cy.xpath("//input[@placeholder='ชื่อบริษัท*']")
        .click()
        .type(data.namecompany);

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[2]",
      ).click();
      cy.contains("บริการด้านไอที").click();

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[3]",
      ).click();
      cy.contains("21-50").click();

      cy.xpath("//input[@placeholder='อีเมล*']").click().type("Test@gmail.com");
      cy.xpath("//input[@placeholder='ชื่อ*']").click().type(data.firstName);
      cy.xpath("//input[@placeholder='นามสกุล*']").click().type(data.lastName);
      cy.xpath("//input[@placeholder='เบอร์มือถือ*']").click().type(data.phone);
      cy.contains("ใช้โค้ดส่วนลด").click();
      cy.xpath("//input[@placeholder='รหัสส่วนลด']")
        .click()
        .type(data.promoCode);
      cy.contains("ใช้โค้ด").click();
      cy.xpath("//input[@type='checkbox']").click();
      cy.contains("เข้าสู่ระบบ").click();
      cy.url().should("include", "/Account/Login");
    });
  });

  it("Should display a validation error should be displayed if the phone number is not fully entered.", () => {
    cy.on("uncaught:exception", (err) => {
      console.error("Application Error:", err);
      console.error("Error Stack:", err.stack);

      return false;
    });
    cy.fixture("data.json").then((data) => {
      cy.visit(URL);

      // Verify page
      cy.url().should("include", "/Register/empeo");
      cy.get("body").should("be.visible");

      cy.contains("อื่นๆ").click();

      cy.xpath("//input[@placeholder='ชื่อบริษัท*']")
        .click()
        .type(data.namecompany);

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[2]",
      ).click();
      cy.contains("บริการด้านไอที").click();

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[3]",
      ).click();
      cy.contains("21-50").click();

      cy.xpath("//input[@placeholder='อีเมล*']").click().type("Test@gmail.com");
      cy.xpath("//input[@placeholder='ชื่อ*']").click().type(data.firstName);
      cy.xpath("//input[@placeholder='นามสกุล*']").click().type(data.lastName);
      cy.xpath("//input[@placeholder='เบอร์มือถือ*']").click().type("09676907");
      
    });
  });

    it("Should display a validation error should be displayed if the phone number is incorrect.", () => {
    cy.on("uncaught:exception", (err) => {
      console.error("Application Error:", err);
      console.error("Error Stack:", err.stack);

      return false;
    });
    cy.fixture("data.json").then((data) => {
      cy.visit(URL);

      // Verify page
      cy.url().should("include", "/Register/empeo");
      cy.get("body").should("be.visible");

      cy.contains("อื่นๆ").click();

      cy.xpath("//input[@placeholder='ชื่อบริษัท*']")
        .click()
        .type(data.namecompany);

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[2]",
      ).click();
      cy.contains("บริการด้านไอที").click();

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[3]",
      ).click();
      cy.contains("21-50").click();

      cy.xpath("//input[@placeholder='อีเมล*']").click().type("Test@gmail.com");
      cy.xpath("//input[@placeholder='ชื่อ*']").click().type(data.firstName);
      cy.xpath("//input[@placeholder='นามสกุล*']").click().type(data.lastName);
      cy.xpath("//input[@placeholder='เบอร์มือถือ*']").click().type("91232141234");
      
    });
  });

  it("should display an error message for an invalid promo code", () => {
    cy.on("uncaught:exception", (err) => {
      console.error("Application Error:", err);
      console.error("Error Stack:", err.stack);

      return false;
    });
    cy.fixture("data.json").then((data) => {
      cy.visit(URL);

      // Verify page
      cy.url().should("include", "/Register/empeo");
      cy.get("body").should("be.visible");

      cy.contains("อื่นๆ").click();

      cy.xpath("//input[@placeholder='ชื่อบริษัท*']")
        .click()
        .type(data.namecompany);

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[2]",
      ).click();
      cy.contains("บริการด้านไอที").click();

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[3]",
      ).click();
      cy.contains("21-50").click();

      cy.xpath("//input[@placeholder='อีเมล*']").click().type(data.email);
      cy.xpath("//input[@placeholder='ชื่อ*']").click().type(data.firstName);
      cy.xpath("//input[@placeholder='นามสกุล*']").click().type(data.lastName);
      cy.xpath("//input[@placeholder='เบอร์มือถือ*']").click().type(data.phone);
      cy.contains("ใช้โค้ดส่วนลด").click();
      cy.xpath("//input[@placeholder='รหัสส่วนลด']")
        .click()
        .type(data.promoCode);
      cy.contains("ใช้โค้ด").click();
    });
  });

  it("should display an error message for an invalid promo code", () => {
    cy.on("uncaught:exception", (err) => {
      console.error("Application Error:", err);
      console.error("Error Stack:", err.stack);

      return false;
    });
    cy.fixture("data.json").then((data) => {
      cy.visit(URL);

      // Verify page
      cy.url().should("include", "/Register/empeo");
      cy.get("body").should("be.visible");

      cy.contains("อื่นๆ").click();

      cy.xpath("//input[@placeholder='ชื่อบริษัท*']")
        .click()
        .type(data.namecompany);

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[2]",
      ).click();
      cy.contains("บริการด้านไอที").click();

      cy.xpath(
        "(//div[contains(@class,'go5-dropdown-selection-input')])[3]",
      ).click();
      cy.contains("21-50").click();

      cy.xpath("//input[@placeholder='อีเมล*']").click().type(data.email);
      cy.xpath("//input[@placeholder='ชื่อ*']").click().type(data.firstName);
      cy.xpath("//input[@placeholder='นามสกุล*']").click().type(data.lastName);
      cy.xpath("//input[@placeholder='เบอร์มือถือ*']").click().type(data.phone);
      cy.contains("ใช้โค้ดส่วนลด").click();
      cy.xpath("//input[@placeholder='รหัสส่วนลด']").click()
        .type("TESTPROMO");
      cy.contains("ใช้โค้ด").click();
      
    });
  });
});


