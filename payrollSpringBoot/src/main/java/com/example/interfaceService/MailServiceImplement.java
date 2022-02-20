package com.example.interfaceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSendException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.MailModel;

@Service
public class MailServiceImplement implements MailService{
	@Autowired
	private JavaMailSender javaMailSender;

	@Override
	public void sendMail(MailModel mailModel) throws MailSendException {
		
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setFrom("w3tuhinkhan@gmail.com");
		msg.setTo(mailModel.getReceiver());
		msg.setSubject("Welcome ");
		msg.setText("You are successfully registered as a new employee");
		javaMailSender.send(msg);
		System.out.println("Mail Sent");

}
}