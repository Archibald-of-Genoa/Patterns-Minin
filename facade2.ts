interface Complaint {
    id: number;
    customer: string;
    details: string;
  }
  
  abstract class Complaints {
    protected complaints: Complaint[] = [];
  
    abstract reply(complaint: Complaint): string;
  
    add(complaint: Complaint): string {
      this.complaints.push(complaint);
      return this.reply(complaint);
    }
  }
  
  class ProductComplaint extends Complaints {
    reply({ id, customer, details }: Complaint): string {
      return `Product: ${id}: ${customer} (${details})`;
    }
  }
  
  class ServiceComplaint extends Complaints {
    reply({ id, customer, details }: Complaint): string {
      return `Service: ${id}: ${customer} (${details})`;
    }
  }
  
  class ComplaintRegistry {
    register(customer: string, type: string, details: string): string {
      const id = Date.now();
      let complaint: Complaints;
  
      if (type === "service") {
        complaint = new ServiceComplaint();
      } else {
        complaint = new ProductComplaint();
      }
  
      return complaint.add({ id, customer, details });
    }
  }
  
  const registry = new ComplaintRegistry();
  
  console.log(registry.register('Tom', 'service', 'Йобанарот!!!'));
  