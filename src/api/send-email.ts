interface FormData {
    name: string;
    email: string;
    company: string;
    message: string;
  }
  
  const sendMail = async (data: FormData): Promise<any> => {
    try {
      const response = await fetch("https://algolabserver.vercel.app/send-email", {
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
  