package com.example.demo.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/local")
public class LocalController {
	
	@GetMapping()
	public String getLocais() {
		return "<b>Retorna o local cadastrado.</b>";
	}
	
	@GetMapping("/{id}")
	public String getLocal() {
		return "Retorna o local pelo id.</b>";
	}
	
	@PostMapping()
	public ResponseEntity<String> inserirLocal(@RequestBody String local){
		return ResponseEntity.status(HttpStatus.CREATED).body(local);
	}
	
	@PutMapping("/{idLocal}")
	public ResponseEntity<String> alterarLocal(@PathVariable("idLocal") int id, @RequestBody String local){
		return ResponseEntity.status(HttpStatus.OK).body(local);
	}
	
	@DeleteMapping("/{idLocal}")
		public ResponseEntity<String> deletarLocal(@PathVariable("idLocal") int id, @RequestBody String local){
			return ResponseEntity.status(HttpStatus.OK).body("Local excluído com sucesso!");
		}
}
