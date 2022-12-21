<html>
  <head>
    <title>OpenAI API Example</title>
  </head>
  <body>
    <h1>OpenAI API Example</h1>
    <form id="form">
      <label for="input">Enter some text:</label><br>
      <input type="text" id="input" name="input"><br>
      <button type="submit" onclick="generateResponse()">Submit</button>
    </form> 
    <div id="response"></div>
    
    <script>
      // Replace YOUR_API_KEY with your actual API key
      const apiKey = "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";
      
      // The base URL for the OpenAI API
      const apiBaseUrl = "https://api.openai.com/v1/";
      
      function generateResponse() {
        // Get the input text from the form
        const inputText = document.getElementById("input").value;
        
        // Set up the request headers
        const headers = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        };
        
        // Set up the request payload
        const data = {
          "model": "davinci",
          "prompt": inputText,
          "max_tokens": 2048
        };
        
        // Make the request to the OpenAI API
        fetch(apiBaseUrl + "completions", {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(responseJson => {
            // Get the response text
            const responseText = responseJson['choices'][0]['text'];
            
            // Display the response text in the "response" element
            document.getElementById("response").innerHTML = responseText;
          });
      }
    </script>
  </body>
</html>
