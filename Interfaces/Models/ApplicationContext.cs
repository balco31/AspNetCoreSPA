using System;
using System.Collections.Generic;
using System.Text;

namespace Interfaces.Models
{
    public class ApplicationContext
    {
        public string SessionId { get; set; }
        public string UserId { get; set; }
        public string CurrentCulture { get; set; }
        public string UserName { get; set; }
    }
}
