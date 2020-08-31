using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemoMasterDetailsApp.Models
{
    public class PurchaseDetails
    {
        public long id { get; set; }
        public string Name { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }

        public long PurchaseId { get; set; }
        public Purchase Purchase { get; set; }
    }
}