using DemoMasterDetailsApp.Models;
using DemoMasterDetailsApp.Models.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoMasterDetailsApp.Controllers
{
    public class PurchaseController : Controller
    {
        private ProjectDbContext _db = new ProjectDbContext();
        
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Purchase purchase)
        {
            if(ModelState.IsValid && purchase.PurchaseDetailses != null && purchase.PurchaseDetailses.Count > 0)
            {
                _db.Purchases.Add(purchase);
                var isPurchaseAdded = _db.SaveChanges() > 0;
                if (isPurchaseAdded)
                {
                    return View(purchase);
                }
            }

            return View();
        }
    }
}