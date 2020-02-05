using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Services
{
    public static class SessionStateExtensions
    {
        public static void Set<T>(this ISession session, string key, T value)
        {
            session.SetString(key, JsonConvert.SerializeObject(value));
        }

        public static T Get<T>(this ISession session, string key) where T : class
        {
            //in this case we should given a class in case of T because the deserialize needs the parameterless constructor of this class to instantiate object
            var value = session.GetString(key);

            return value == null ? default(T) :
                JsonConvert.DeserializeObject<T>(value);
        }

        public static object Get(this ISession session, string key, Type typeOfObject)
        {
            var value = session.GetString(key);

            return value == null ? null :
                JsonConvert.DeserializeObject(value, typeOfObject);
        }
    }
}
