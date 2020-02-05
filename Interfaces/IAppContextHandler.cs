using Interfaces.Models;
using System;

namespace Interfaces
{
    public interface IAppContextHandler
    {
        ApplicationContext GetContext();
        void SetContext(ApplicationContext appContext);
    }
}
