interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
  }
  
  const sendMail = async (data: FormData): Promise<any> => {
    try {
      const response = await fetch("http://3.35.146.89:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }
  
      return await response.json();
    } catch (error) {
      console.error("sendMail error:", error);
      throw error;
    }
  };
  
  export default sendMail;
  