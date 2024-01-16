

export default async function sendRegisterData(data, setErrStatus, resetForm) {

  try {
    const response = await fetch('http://localhost:4000/api/customers', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }
    const responseData = await response.json();
    console.log('Відповідь від сервера:', responseData);
    setErrStatus(false);
    resetForm();
  } catch (error) {
    if (error.message && error.message.includes("already exists")) {
      setErrStatus(true);
    }
  }
}