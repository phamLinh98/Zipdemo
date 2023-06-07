async function Count(ms) {
    for (let i = 1; i <= 4; i++) {
      try {
        await new Promise(resolve =>setTimeout(resolve, ms));
        console.log(i);
      } catch (error) {
        console.log(error);
      }
    }
  }
Count(1000);