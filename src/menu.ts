export const menu = [
{id:'flat',name:'Velvet Flat White',az:'Flat White',category:'Coffee',price:650,emoji:'☕',note:'Double espresso · silky milk',image:'photo-1570968915860-54d5c301fa9f',color:'#e9dbcc'},
{id:'latte',name:'Pistachio Cloud',az:'Püstəli Latte',category:'Coffee',price:850,emoji:'☕',note:'Pistachio · espresso · oat milk',image:'photo-1461023058943-07fcbe16d735',color:'#d7dfb8'},
{id:'espresso',name:'Double Espresso',az:'İkiqat Espresso',category:'Coffee',price:450,emoji:'☕',note:'Bold, balanced & beautifully simple',image:'photo-1510707577719-ae7c14805e3a',color:'#d6b59c'},
{id:'iced',name:'Iced Caramel Latte',az:'Buzlu Karamelli Latte',category:'Coffee',price:800,emoji:'🧊',note:'Espresso · caramel · cold milk',image:'photo-1517701604599-bb29b565090c',color:'#ead8bb'},
{id:'nar',name:'Pomegranate Fizz',az:'Nar Fizz',category:'Refreshers',price:750,emoji:'🍹',note:'Pomegranate · lime · sparkling water',image:'photo-1513558161293-cdaf765edfd7',color:'#efbcc0'},
{id:'tea',name:'Azerbaijani Tea',az:'Azərbaycan Çayı',category:'Tea',price:600,emoji:'🫖',note:'Black tea · lemon · a moment to pause',image:'photo-1544787219-7f47ccb76574',color:'#e2cbb1'},
{id:'croissant',name:'Butter Croissant',az:'Kərə Yağlı Kruassan',category:'Bakery',price:550,emoji:'🥐',note:'Golden layers · baked comfort',image:'photo-1555507036-ab1f4038808a',color:'#eccc96'},
{id:'cake',name:'Basque Cheesecake',az:'Bask Çizkeyki',category:'Bakery',price:900,emoji:'🍰',note:'Caramelised top · creamy centre',image:'photo-1533134242443-d4fd215305ad',color:'#e6d1ad'},
{id:'toast',name:'Garden Toast',az:'Avokadolu Tost',category:'Kitchen',price:1250,emoji:'🥑',note:'Avocado · sourdough · fresh greens',image:'photo-1525351484163-7529414344d8',color:'#cbd7b9'},
{id:'bowl',name:'Sunshine Bowl',az:'Səhər Yeməyi Kasası',category:'Kitchen',price:1100,emoji:'🥣',note:'Yoghurt · granola · seasonal fruit',image:'photo-1511690743698-d9d85f2fbf38',color:'#e8c5a1'}
];
export const money=(n:number)=>`${(n/100).toFixed(2)} ₼`;
export const photo=(id:string,w=700)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
