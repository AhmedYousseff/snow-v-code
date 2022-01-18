/* run in scope KuSS
* expected run time: < 50 seconds
* this script is used to triger the Business rule: "CKW DI Set calculated fields"
*/

(function(){

   if (!gs.getCurrentScopeName() === "kuSS") {
         gs.info("Please run in KuSS scope");
         return;
      }

   var searchLimitQuery = "sys_created_onBETWEENjavascript:gs.dateGenerate('2020-12-31','23:59:59')@javascript:gs.dateGenerate('2021-12-31','23:59:59')";

   // update multiple records on Delivery information table
   var deliveryInformationGr = new GlideRecord('x_ckagc_kuss_delivery_information');
   deliveryInformationGr.addEncodedQuery(searchLimitQuery);
   deliveryInformationGr.addNullQuery('product');
   deliveryInformationGr.setValue('sys_updated_on', '2021-10-05','23:59:59');
   deliveryInformationGr.updateMultiple();

}());
