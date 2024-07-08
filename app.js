let container = document.getElementById("container");

const fetchApiData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    for (key of data) {
      container.innerHTML += `
      <table class="w-full text-2xl mx-auto utility class text-center rtl:text-right text-gray-500 dark:text-gray-400">
       <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      
                  <th scope="col" class="px-6 py-3">
                       ${key.id}
                  </th>
      
                  <tbody>
                 <tr class="bg-white dark:bg-gray-800">
                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                     ${key.name} 
                 </th>
         
                 </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${key.username}
                        </th>
                        
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${key.email}
                        </th>
                        
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                           ${key.phone}
                        </th>
                       
                    </tr>
                    
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            ${key.website}
                        </th>
                       
                    </tr>
                    
                    <tr class="bg-white dark:bg-gray-800">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              ${key.address.city}
                        </th>
                       
                    </tr>
                    
                    <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ${key.address.street}
                        </th>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    ${key.address.suite}
                        </th>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        ${key.address.zipcode}
                        </th>
                    </tr>
                    
                </tbody>
        </thead>
        </table>
       
      
           
      `;
    }
  } catch (err) {
    console.log(err);
  }
};
fetchApiData();
