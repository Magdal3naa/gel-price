async function getPrice(url) {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=gelato&vs_currencies=usd');
      const data = await response.json();
      const price = data.gelato.usd;
      document.getElementById('result').textContent = `The price of Gelato is: $${price}`;
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }
  
  getPrice();