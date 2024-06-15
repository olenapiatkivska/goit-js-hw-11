export const fetchImg = requestValue => {
  const searchParams = new URLSearchParams({
    key: '44362034-5d7ab655544c2caf430070a80',
    q: requestValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
