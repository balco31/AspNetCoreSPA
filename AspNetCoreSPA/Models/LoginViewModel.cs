using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSPA.Models
{
    public class LoginViewModel
    {
        [Required]
        [EmailAddress]
        [DisplayName("User")]
        public string UserName { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [DisplayName("Password")]
        public string Password { get; set; }

        public string ErrorMessage { get; set; }
    }
}
