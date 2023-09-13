import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    font-family: 'Raleway', sans-serif;
    padding: 80px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 20px;
`;

const FormContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const ContactForm = ({id}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your email sending logic here if needed
    // For now, just clear the form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Wrapper id={id}>
        <Title>Contact Me!</Title>
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </FormContainer>
    </Wrapper>
  );
};

export default ContactForm;
