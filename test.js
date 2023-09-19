const puppeteer = require("puppeteer");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--headless",
      "--disable-gpu",
      "--remote-debugging-port=9222",
      "--no-sandbox",
      "--disable-setuid-sandbox",
    ],
  });
  const page = await browser.newPage();
  try {
    await page.goto("https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/");
    await page.setViewport({
      width: 1200,
      height: 800,
    });
    await page.waitForSelector("section");
    await page.waitForSelector("h2");
    await page.waitForSelector("p");

    console.log("TESTCASE:Basic_tags:success");
  } catch (e) {
    console.log("TESTCASE:Basic_tags:failure");
  }

  const page1 = await browser.newPage();
  try {
    await page1.goto("https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/");
    await page1.setViewport({
      width: 1200,
      height: 800,
    });

    await page1.waitForSelector("img");
    await page1.waitForSelector("form");
    await page1.waitForSelector("footer");

    console.log("TESTCASE:Basic_tags:success");
  } catch (e) {
    console.log("TESTCASE:Basic_tags:failure");
  }

  const page2 = await browser.newPage();
  try {
    await page2.goto("https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/");
    await page2.setViewport({
      width: 1200,
      height: 800,
    });
    const result1 = await page2.evaluate(() => {
      let heading = document.querySelector("#pagetop");
      return heading.innerHTML;
    });
    const result3 = await page2.evaluate(() => {
      let heading = document.querySelector("#about");
      return heading.innerHTML;
    });
    const result4 = await page2.evaluate(() => {
      let heading = document.querySelector("#skills");
      return heading.innerHTML;
    });
    const result5 = await page2.evaluate(() => {
      let heading = document.querySelector(".skill");
      return heading.innerHTML;
    });
    const result6 = await page2.evaluate(() => {
      let heading = document.querySelector("#name");
      return heading.innerHTML;
    });
    console.log("TESTCASE:Id_Class_names:success");
  } catch (e) {
    console.log("TESTCASE:Id_Class_names:failure");
  }
  const page3 = await browser.newPage();
  try{
    const pageTitle = await page3.title();
    if (pageTitle === 'Portfolio') {
      console.log('TESTCASE:testcase4:success');
    } else {
      console.log('TESTCASE:testcase4:failure');
    }
   }catch(e){
    console.log("Error : ")
   }
   // Test Case 1: Check if the title is "Portfolio"
   const page4 = await browser.newPage();
try {
    await page4.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page4.waitForSelector('title');
    const title = await page4.title();
    if (title === 'Portfolio') {
      console.log('TESTCASE:Title_present:success');
    }
  } catch (e) {
    console.log('TESTCASE:Title_present:failure');
  }
  // Test Case 2: Check if the heading "MERN Stack Developer" exists
  const page5 = await browser.newPage();
  try {
    await page5.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page5.waitForSelector('h2');
    const heading = await page5.$eval('h2', (element) => element.textContent);
    if (heading === 'MERN Stack Developer') {
      console.log('TESTCASE:Heading_present:success');
    }
  } catch (e) {
    console.log('TESTCASE:Heading_present:failure');
  }
  // Test Case 3: Check if the "About Me" section exists
  const page6 = await browser.newPage();
  try {
    await page6.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page6.waitForSelector('#about');
    const aboutSection = await page6.$('#about');
    if (aboutSection) {
      console.log('TESTCASE:About-me_section:success');
    }
  } catch (e) {
    console.log('TESTCASE:testcase7:failure');
  }
  // Test Case 4: Check if the "My Skills" section exists
  const page7 = await browser.newPage();
  try {
    await page7.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page7.waitForSelector('#skills');
    const skillsSection = await page7.$('#skills');
    if (skillsSection) {
      console.log('TESTCASE:Myskills_section:success');
    }
  } catch (e) {
    console.log('TESTCASE:Myskills_section:failure');
  }
  // Test Case 5: Check if the "Contact Me" section exists
  const page8 = await browser.newPage();
  try {
    await page8.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page8.waitForSelector('#contact');
    const contactSection = await page8.$('#contact');
    if (contactSection) {
      console.log('TESTCASE:Contact-me_section:success');
    } 
  } catch (e) {
    console.log('TESTCASE:Contact-me_section:failure');
  }
  // Test Case 6: Check if the footer exists
  const page9 = await browser.newPage();
  try {
    await page9.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page9.waitForSelector('footer');
    const footer = await page9.$('footer');
    if (footer) {
      console.log('TESTCASE:Footer_present:success');
    } 
  } catch (e) {
    console.log('TESTCASE:Footer_present:failure');
  }
  // Test Case 7: Check if the "Submit" button exists
  const page10 = await browser.newPage();
  try {
    await page10.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page10.waitForSelector('input[type="submit"]');
    const submitButton = await page10.$('input[type="submit"]');
    if (submitButton) {
      console.log('TESTCASE:Submit-button:success');
    }
  } catch (e) {
    console.log('TESTCASE:Submit-button:failure');
  }
  // Test Case 8: Check if the "Submit" button has the correct value
  const page11 = await browser.newPage();
  try {
    await page11.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page11.waitForSelector('input[type="submit"]');
    const submitButtonValue = await page11.$eval('input[type="submit"]', (element) => element.value);
    if (submitButtonValue === 'Submit') {
      console.log('TESTCASE:button-value:success');
    } 
  } catch (e) {
    console.log('TESTCASE:button-value:failure');
  }
  // Test Case 9: Check if the body has the correct font-family and background-color
  const page12 = await browser.newPage();
  try {
    await page12.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page12.waitForSelector('body');
    const bodyStyles = await page12.$eval('body', (element) => {
      return {
        fontFamily: window.getComputedStyle(element).fontFamily,
        backgroundColor: window.getComputedStyle(element).backgroundColor,
      };
    });

    if (
      bodyStyles.fontFamily === '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' &&
      bodyStyles.backgroundColor === 'rgb(249, 246, 246)'
    ) {
      console.log('TESTCASE:body-styles:success');
    }
  } catch (e) {
    console.log('TESTCASE:body-styles:failure');
  }
  // Test Case 10: Check if the #pagetop has the correct background-image
  const page13 = await browser.newPage();
  try {
    await page13.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page13.waitForSelector('#pagetop');
    const pagetopStyles = await page13.$eval('#pagetop', (element) => {
      return {
        backgroundImage: window.getComputedStyle(element).backgroundImage,
      };
    });
    if (pagetopStyles.backgroundImage.includes('https://plus.unsplash.com/premium_photo-1661775756810-82dbd209fc95')) {
      console.log('TESTCASE:page-top_image:success');
    }
  } catch (e) {
    console.log('TESTCASE:page-top_image:failure');
  }
  // Test Case 11: Check if the .cta button has the correct background-color
  const page14 = await browser.newPage();
  try {
    await page14.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page14.waitForSelector('.cta');
    const ctaStyles = await page14.$eval('.cta', (element) => {
      return {
        backgroundColor: window.getComputedStyle(element).backgroundColor,
      };
    });
    if (ctaStyles.backgroundColor === 'rgb(11, 12, 16)') {
      console.log('TESTCASE:cta-button_color:success');
    } 
  } catch (e) {
    console.log('TESTCASE:cta-button_color:failure');
  }
  // Test Case 12: Check if the #about section has the correct background-color
  const page15 = await browser.newPage();
  try {
    await page15.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page15.waitForSelector('#about');
    const aboutStyles = await page15.$eval('#about', (element) => {
      return {
        backgroundColor: window.getComputedStyle(element).backgroundColor,
      };
    });
    if (aboutStyles.backgroundColor === 'rgb(11, 12, 16)') {
      console.log('TESTCASE:acout-section_color:success');
    }
  } catch (e) {
    console.log('TESTCASE:acout-section_color:failure');
  }
  // Test Case 13: Check if the .skill divs have the correct box-shadow
  const page16 = await browser.newPage();
  try {
    await page16.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page16.waitForSelector('.skill');
    const skillStyles = await page16.$eval('.skill', (element) => {
      return {
        boxShadow: window.getComputedStyle(element).boxShadow,
      };
    });
   
    if (skillStyles.boxShadow === 'rgba(0, 0, 0, 0.1) 0px 2px 4px 0px') {
      console.log('TESTCASE:.skill_divs_styling:success');
    } 
  } catch (e) {
    console.log('TESTCASE:.skill_divs_styling:failure');
  }
  // Test Case 14: Check if the #contact form labels have the correct font-weight
  const page17 = await browser.newPage();
  try {
    await page17.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page17.waitForSelector('#contact form label');
    const labelStyles = await page17.$eval('#contact form label', (element) => {
      return {
        fontWeight: window.getComputedStyle(element).fontWeight,
      };
    });
    
    if (labelStyles.fontWeight === '700') {
      console.log('TESTCASE:contact-form_styling:success');
    } 
  } catch (e) {
    console.log('TESTCASE:contact-form_styling:failure');
  }
  // Test Case 15: Check if the footer has the correct background-color
  const page18 = await browser.newPage();
  try {
    await page18.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page18.waitForSelector('footer');
    const footerStyles = await page18.$eval('footer', (element) => {
      return {
        backgroundColor: window.getComputedStyle(element).backgroundColor,
      };
    });
    if (footerStyles.backgroundColor === 'rgb(11, 12, 16)') {
      console.log('TESTCASE:Footer_color:success');
    }
  } catch (e) {
    console.log('TESTCASE:Footer_color:failure');
  }
  // Test Case 16: Check if the footer has the correct text color
  const page19 = await browser.newPage();
  try {
    await page19.goto('https://8081-baeaabaceeecc305231864ebabbccecceone.premiumproject.examly.io/');
    await page19.waitForSelector('footer');
    const footerTextStyles = await page19.$eval('footer', (element) => {
      return {
        color: window.getComputedStyle(element).color,
      };
    });
    if (footerTextStyles.color === 'rgb(255, 255, 255)') {
      console.log('TESTCASE:Footer-text-color:success');
    }
  } catch (e) {
    console.log('TESTCASE:Footer-text-color:failure');
  }
   finally {
    await page.close();
    await page1.close();
    await page2.close();
    await page3.close();
    await page4.close();
    await page5.close();
    await page6.close();
    await page7.close();
    await page9.close();
    await page9.close();
    await page10.close();
    await page11.close();
    await page12.close();
    await page13.close();
    await page14.close();
    await page15.close();
    await page16.close();
    await page17.close();
    await page18.close();
    await page19.close();
    await browser.close();
  }
})();
