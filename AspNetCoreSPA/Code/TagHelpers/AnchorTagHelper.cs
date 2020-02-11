namespace AspNetCoreSPA.Code.TagHelpers
{
    using Microsoft.AspNetCore.Mvc.TagHelpers;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    using Microsoft.AspNetCore.Razor.TagHelpers;
    using System.Text;

    [HtmlTargetElement("a", Attributes = "asp-isPartial")]
    public class miAnchorTagHelper : AnchorTagHelper
    {
        public miAnchorTagHelper(IHtmlGenerator generator)
           : base(generator)
        {
        }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            var url = "/";
            for (int i = 0; i < output.Attributes.Count; ++i)
            {
                if (output.Attributes[i].Name == "href")
                {
                    url = output.Attributes[i].Value.ToString();
                    output.Attributes.RemoveAt(i);
                }
            }

            if (bool.TryParse(context.AllAttributes["asp-isPartial"].Value.ToString(), out bool isPartial))
            {
                if (isPartial)
                {
                    output.Attributes.Add("onClick", $"javascript:EntryPoint.Router.navigate('{url}');");
                }
            }

            base.Process(context, output);

            for (int i = 0; i < output.Attributes.Count; ++i)
            {
                if (output.Attributes[i].Name == "href")
                {
                    output.Attributes.RemoveAt(i);
                }
            }
        }
    }
}