import { Component, OnInit } from '@angular/core';

import { Contato } from './contato';
import { ContatoService } from './contato.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  

  contato: Contato = new Contato();
contatos: Array<any> = new Array();
  constructor( private contatoService: ContatoService, private fb: FormBuilder) { 

  }
  contatoForm!: FormGroup;
  ngOnInit(): void {
    this.listarContatos();
    this.contatoForm = this.fb.group({
      nome: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      telefone: ["", [Validators.required]],
      aniversario: ["", [Validators.required, Validators.pattern(/^([0-9]{1,6})$/)]]
    });
  }

  atualizar(id: number){
    this.contatoService.atualizarContato(id, this.contato).subscribe(res => {
    
      this.contato = new Contato();
      this.listarContatos();
  
      }, err =>{
        console.log('erro',err);
      })
  }

  remover (id: number){
    this.contatoService.removerContato(id).subscribe(res => {
    
      this.contato = new Contato();
      this.listarContatos();
  
      }, err =>{
        console.log('erro',err);
      })
  }
  cadastrar(){
    console.log(this.contato);
    this.contatoService.cadastrarContato(this.contato).subscribe(res => {
    
    this.contato = new Contato();
    this.listarContatos();

    }, err =>{
      console.log('erro',err);
    })
      }
    
  listarContatos(){
this.contatoService.listarContatos().subscribe(res => {
this.contatos=res;
}, err =>{
  console.log('erro',err);
})
  }
}
