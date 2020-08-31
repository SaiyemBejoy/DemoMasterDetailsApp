using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DemoMasterDetailsApp.Models.DbContext
{
    public class ProjectDbContext : System.Data.Entity.DbContext
    {
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<PurchaseDetails> PurchaseDetailses { get; set; }
    }
}