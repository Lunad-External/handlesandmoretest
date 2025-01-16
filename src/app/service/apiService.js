export const getNavLinkMenu = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/rootmenu/menus`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"",
        },
        cache: "no-cache",
      }
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      // throw new Error(`HTTP error! status: ${response.status}`);
      return [];
    }

    // Try to parse the response and log it if there's an error
    let data;
    try {
      const text = await response.text();
      data = JSON.parse(text);
    } catch (parseError) {
      console.error('JSON Parse Error:', parseError);
      throw new Error('Invalid JSON response from server');
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error('Invalid data structure:', data);
      throw new Error('Invalid data structure received from server');
    }

    if (!data[0]?.menus) {
      console.error('No menus found in response:', data[0]);
      throw new Error('No menus found in response');
    }
    return data[0].menus;
  } catch (error) {
    console.error("getNavLinkMenu error:", error);
    // throw error;
  }
}

export const getsubCategory = async (subcategory) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/subcategory/?where[subcategoryslug][equals]=${subcategory}&depth=3&draft=false&locale=undefined`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"",
        },
        cache: "no-cache",

      }
    );

    if (!response.ok) {
      // const errorText = await response.text();
      // console.error('API Error Response:', errorText);
      // throw new Error(`HTTP error! status: ${response.status}`);
      return;
    }

    const data = await response.json();
    return data?.docs[0];


  }catch (error) {
    console.error("getsubCategory error:", error);
    // throw error;
  }
}

export const getSubCategoryProductdata = async (subcategory) => {
 
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/Products/?where[Subcategory.subcategoryslug][equals]=${subcategory}&depth=2&draft=false&locale=undefined`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"",
        },
        cache: "no-cache",

      }
    );

    if (!response.ok) {
      // const errorText = await response.text();
      // console.error('API Error Response:', errorText);
      // throw new Error(`HTTP error! status: ${response.status}`);
      return;
    }

    // Try to parse the response and log it if there's an error
    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error("getProductdata error:", error);
    // throw error;
  }
}

export const getProductData = async (product) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/Products?depth=1&draft=false&locale=undefined&where[producturl][equals]=${product}&sort=title`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"",
        },
        cache: "no-cache",
        
      }
    );

    if (!response.ok) {
      // const errorText = await response.text();
      // console.error('API Error Response:', errorText);
      // throw new Error(`HTTP error! status: ${response.status}`);
      return;
    }

    // Try to parse the response and log it if there's an error
    const data = await response.json();
    return data?.docs[0];
  } catch (error) {
    console.error("getProductdata error:", error);
    // throw error;
  }
}

export const getHandlesData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/Products?select[title]=true&select[image]=true&select[completeurl]=true&where[Category.categoryslug][equals]=handles&limit=10`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"",
        },
        cache: "no-cache",
        
      }
    );

    if (!response.ok) {
      return [];
      // const errorText = await response.text();
      // console.error('API Error Response:', errorText);
      // throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Try to parse the response and log it if there's an error
    const data = await response.json();
    return data?.docs;
  } catch (error) {
    console.error("getHnadlesData error:", error);
    // throw error;
  }
}

export const getBrandsData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/brands`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // "Authorization":"",
        },
        cache: "no-cache",
        
      }
    );

    if (!response.ok) {
      // const errorText = await response.text();
      // console.error('API Error Response:', errorText);
      // throw new Error(`HTTP error! status: ${response.status}`);
      return [];
    }

    // Try to parse the response and log it if there's an error
    const data = await response.json();
    return data?.docs;  
  } catch (error) {
    console.error("getBrandsData error:", error);
    // throw error;
  }
}