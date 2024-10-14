@IsTest
public with sharing class EmailWebServiceTest {
  public EmailWebServiceTest() {
  }
  @IsTest
  static void testGetContactWithContactEmail() {
    List<String> emails = new List<String>();
    emails.add('a_young@dickenson.com');

    RestRequest request = new RestRequest();
    request.requestURI = '/services/apexrest/c1';
    request.requestBody = Blob.valueOf('{"emails" : [' + emails.get(0) + ']}');
    RestContext.request = request;
    List<C1__c> obj = EmailManager.getEmail();
    System.assert(obj.size() > 0);
  }
}
