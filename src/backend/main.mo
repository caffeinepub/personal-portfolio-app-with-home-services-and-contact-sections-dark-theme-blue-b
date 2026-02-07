import Time "mo:core/Time";
import List "mo:core/List";
import Order "mo:core/Order";

actor {
  type ContactSubmission = {
    name : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compare(s1 : ContactSubmission, s2 : ContactSubmission) : Order.Order {
      if (s1.timestamp < s2.timestamp) {
        #less;
      } else if (s1.timestamp > s2.timestamp) {
        #greater;
      } else { #equal };
    };
  };

  let submissions = List.empty<ContactSubmission>();

  public shared ({ caller }) func submitContact(name : Text, message : Text) : async () {
    let newSubmission : ContactSubmission = {
      name;
      message;
      timestamp = Time.now();
    };
    submissions.add(newSubmission);
  };

  public query ({ caller }) func getSubmissions() : async [ContactSubmission] {
    submissions.toArray();
  };
};
