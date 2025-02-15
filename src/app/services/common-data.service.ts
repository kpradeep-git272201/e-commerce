import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  listApps = [
    {
      appId: 101,
      appName: "Dashboard",
      icon: "dashboard",
      childApp: false
    },
    {
      appId: 102,
      appName: "Product",
      icon: "home",
      childApp: true,
      subApps: [
        {
          appId: 1021,
          subAppName: "View Product",
          icon: "view_compact"
        },
        {
          appId: 1022,
          subAppName: "Add Product",
          icon: "add"
        },
        {
          appId: 1023,
          subAppName: "Categories",
          icon: "category"
        },
        {
          appId: 1024,
          subAppName: "Inventory",
          icon: "note_add"
        },
      ]
    },
    {
      appId: 103,
      appName: "Order",
      icon: "local_grocery_store",
      childApp: true,
      subApps: [
        {
          appId: 1031,
          subAppName: "View Order",
          icon: "view_compact"
        },
        {
          appId: 1032,
          subAppName: "Add Order",
          icon: "add"
        },
        {
          appId: 1033,
          subAppName: "Order Tracking",
          icon: "track_changes"
        },
        {
          appId: 1034,
          subAppName: "Return & Refunds",
          icon: "keyboard_return"
        },
      ]
    },

    {
      appId: 104,
      appName: "Customer",
      icon: "people",
      childApp: true,
      subApps: [
        {
          appId: 1041,
          subAppName: "Customer List",
          icon: "list"
        },
        {
          appId: 1042,
          subAppName: "Add Customer",
          icon: "person_add"
        },
        {
          appId: 1043,
          subAppName: "Customer Detail",
          icon: "Detail"
        },
        {
          appId: 1044,
          subAppName: "Feedback",
          icon: "feedback"
        },
        {
          appId: 1045,
          subAppName: "Manage Review",
          icon: "rate_review"
        },
      ]
    },
    {
      appId: 105,
      appName: "Admin",
      icon: "person",
      childApp: true,
      subApps: [
        {
          appId: 1051,
          subAppName: "Profile",
          icon: "rate_review"
        },
        {
          appId: 1052,
          subAppName: "Role Permissions",
          icon: "rate_review"
        },
        {
          appId: 1053,
          subAppName: "Setting",
          icon: "settings"
        },
        {
          appId: 1054,
          subAppName: "System Logs",
          icon: "system_update"
        },
        {
          appId: 1055,
          subAppName: "User Management",
          icon: "person"
        },
      ]
    },
    {
      appId: 106,
      appName: "Setting",
      icon: "settings",
      childApp: true,
      subApps: [
        {
          appId: 1061,
          subAppName: "profile-setting",
          icon: "settings"
        },
        {
          appId: 1062,
          subAppName: "Notification",
          icon: "notifications"
        },
        {
          appId: 1063,
          subAppName: "Payment Method",
          icon: "payment"
        },
        {
          appId: 1064,
          subAppName: "shipping Delivery",
          icon: "local_shipping"
        }
      ]
    },
    {
      appId: 107,
      appName: "Support",
      icon: "help",
      childApp: false
    },
    {
      appId: 107,
      appName: "Testing",
      icon: "edit",
      childApp: true,
      subApps: [
        {
          appId: 1071,
          subAppName: "Test",
          icon: "filter_tilt_shift"
        },
      ]
    },
  ];

  private loggedIn = false;
  constructor() { 

  }

  getLogin(userName: any, password:any) : boolean{
    if(userName && password){
      this.loggedIn=true;
      localStorage.setItem('user', JSON.stringify({ userName }));
      return this.loggedIn;
     
    }
    return this.loggedIn;
  }

  logout() :boolean {
    this.loggedIn = false;
    localStorage.removeItem('user');
    return true
  }

  isLoggedIn(): boolean {
    return this.loggedIn || !!localStorage.getItem('user');
  }


  getReceiptData(){
    return {
      school: {
        name: 'NISCORT Father Agnel School',
        affiliated: '(A Senior Secondary School - Affiliated to CBSE, Delhi)',
        applicationNo: 'APPLICATION No. : 213264',
        address: 'A-2 Sector-I, Vaishali, Ghaziabad, U.P. - 201012',
        contact: '0120-2776500, 2771010'
      },
      session: '2023-2024',
      student: {
        name: 'HRADHYA SINGH',
        fatherName: 'KAMLESH PRATAP SINGH',
        class: 'V CAMELLIA',
        admissionNo: 858
      },
      receipt: {
        receiptNo: 7815,
        date: '09/01/2024',
        mode: 'Online',
        bank: 'PG',
        transactionId: 'pay_NMXOTmmtfNka3J'
      },
      fees: [
        { name: 'TUITION FEE [JANUARY, FEBRUARY, MARCH]', amount: 19545, fine: 0 },
        { name: 'LEGO [JANUARY, FEBRUARY, MARCH]', amount: 450, fine: 0 }
      ],
      total: {
        amount: 19995,
        fine: 0,
        grandTotal: 19995,
        inWords: 'Rupees Nineteen Thousand Nine Hundred Ninety Five'
      }
    };
  }
}
