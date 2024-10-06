
//tache 1

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

const values = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(values);


//tache 2

async function waitCall() {
    try {
      console.log('Fetching data from API...');
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: [1, 2, 3, 4, 5] });
        }, 2000);
      });
      console.log('Data received from API:', response.data);
    } catch (error) {
      console.error('Error fetching data from API:', error);
    }
  }

  waitCall();


  
//tache 3

  async function logMessageWithDelay(message) {
    console.log(message);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  
  async function chainedAsyncFunctions() {
    try {
      await logMessageWithDelay('Function 1 executed');
      await logMessageWithDelay('Function 2 executed');
      await logMessageWithDelay('Function 3 executed');
      console.log('All functions completed');
    } catch (error) {
      console.error('Error:', error);
    }
  }


  
//tache 4

async function concurrentRequests() {
    try {
      console.log('Fetching data from API 1 and API 2...');
  
      const [response1, response2] = await Promise.all([
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: [1, 2, 3] });
          }, 2000);
        }),
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: [4, 5, 6] });
          }, 2000);
        }),
      ]);
  
      const combinedData = [...response1.data, ...response2.data];
      console.log('Combined data:', combinedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


//tache 5

  async function parallelCalls(urls) {
    try {
      console.log('Fetching data from multiple URLs...');
  
      const responses = await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url);
          return response.json();
        })
      );
  
      console.log('Responses:', responses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }