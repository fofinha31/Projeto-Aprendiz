using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NovoDesafioheroi.Models
{
    public class Pessoa
 {
    public string Nome { get; set; }
    public int Idade { get; set; }

    public void Aprensentar()
    {
        Console.writeline ($"Olá, meu nome é {Nome}, e tenho {Idade} anos");
    }
  }
}