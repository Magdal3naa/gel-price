async function getPrice() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=gelato&vs_currencies=usd');
      const data = await response.json();
      const price = data.gelato.usd;
      const resultElement = document.getElementById('result');
      resultElement.textContent = `The price of $GEL is: $${price}`;
  
      const infoElement = document.getElementById('info');
      const link = document.createElement('a');
      link.href = 'https://www.coingecko.com/en/coins/gelato'; // Replace with the desired URL
      link.textContent = 'Click here for more information'; // Replace with the desired link text
      infoElement.textContent = '';
      infoElement.appendChild(link);
    } catch (error) {
      console.log('An error occurred:', error);
    }
  }
  
  // Call the getPrice function immediately
  getPrice();
  
  // Update the price every 60 seconds
  setInterval(getPrice, 60000);
  