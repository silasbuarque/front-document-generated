import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { CommonModule } from '@angular/common';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-document-generator',
  standalone: true,
  imports: [CommonModule, ClipboardModule, FormsModule],
  templateUrl: './document-generator.component.html',
  styleUrls: ['./document-generator.component.css']
})
export class DocumentGeneratorComponent {
  copied = false;
  generatedCpf: string = '';
  isCopied: boolean = false;
  usePunctuation: boolean = true;
  
  constructor(
    private cpfService: DocumentService,
    private clipboard: Clipboard
  ) {}

  generateCpf(): void {
    this.cpfService.generateCpf().subscribe(
      response => {
        let cpf = response.document;
        this.generatedCpf = this.usePunctuation ? this.formatCpf(cpf) : cpf;
        this.isCopied = false;
      },
      error => {
        console.error('Error generating CPF:', error);
      }
    );
  }


  private formatCpf(cpf: string): string {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedCpf);
    this.copied = true;
    
    // Reset após 2 segundos
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
