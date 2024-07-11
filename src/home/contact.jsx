import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    // Aquí puedes agregar un feedback al usuario si es necesario
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="https://formsubmit.co/darminweblocal00@gmail.com" method="POST">
        <div className="columns">
          <div className="column1">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="column2">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required        
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea 
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required 
          />
        </div>
        <input type="hidden" name="_subject" value="New submission!" />
        <input type="hidden" name="_captcha" value="false" />
        <button type="submit" className="btn-form">Enviar Mensaje</button>
      </form>
    </>
  );
};
export default Contact;