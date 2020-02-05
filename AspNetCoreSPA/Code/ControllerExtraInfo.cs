using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSPA.Code
{
 
    [AttributeUsage(AttributeTargets.Class)]
    public class ControllerExtraInfoAttribute : Attribute
    {
        private string _name;
        private string _viewPath;

        public ControllerExtraInfoAttribute()
        {
        }

        public virtual string Name
        {
            get { return _name; }
            set { _name = value; }
        }
        public virtual string ViewPath
        {
            get { return _viewPath; }
            set { _viewPath = value; }
        }
    }

    public class ControllerNameAttributeConvention : IControllerModelConvention
    {
        public void Apply(ControllerModel controller)
        {
            var controllerNameAttribute = controller.Attributes.OfType<ControllerExtraInfoAttribute>().SingleOrDefault();
            if (controllerNameAttribute != null)
            {
                controller.ControllerName = controllerNameAttribute.Name;
            }
        }
    }
}
