/* 
 * ˵��: 
 * ��Դ���������ע����Auscar 
 linŻ����Ѫ����.ּ�ڴٽ�jQuery�Ĵ����Լ�����jQuery�������ṩһ������ 
 * 
 ��;��,���ø�λ����������˽�jQuery,ѧϰ�������õļ���,�Ӷ�Ϊ�����л�J 
 S��һ���ౡ֮��...(˵����...) 
 * 
 * 
 ���ļ�������jQuery����ԭ����Ӣ��ע��,����������������г��˳����Եķ�
 ��(���������Ƿ���).ˮƽ����ϣ������������. 
 * 
 ����,������ע�Ͳ��Ǽ򵥽�ԭ�ķ���(jQuery�������ٵÿ�����ע�͸���������
 �����Ƕ�ͨjQuery��Դ����). 
 * 
 ���Ǿ���������Ŭ�����������ͼ�Լ����漰���и߼���JavaScript�������
 ����չ�ָ���λ����,���ļ�ע�ͽ�Ϊ�꾡. 
 * 
 * ��ע�͵���д�����,��ȡ�˱Ƚ�����ķ�ʽ������, 
 Ŀ�����ڱ����ɬ��˵���Լ��������������֮��ľ���,ͬʱҲ��Ϊ�� 
 * ��ǿ������Ķ������Ȥζ��.����,���˲����ᳫʹ�����Ľ���ע��, 
 ����Ϊ���������Ⱥ��, ������Ϊ֮... 
 * 
 * ��ʶ��ǳ,����֮��ϣ��ָ��. 
 ��Ҳϣ�������������֧���ҵĹ���.���������ҵ�ע�Ͷ����а���, 
 �벻Ҫ��ϧ��ĸ�л~ 
 * ������������н��鶼����ͨ��������������ʼ���ַ���͸���: 
 * auscar@126.com 
 * 
 * ���ߵ�¼�ҵĸ�����վ��������: 
 * http://www.linhuihua.com (ע:linhuihua���ҵ�������ƴ��) 
 * 
 * ������,����д�ķ�jQuery js ���miniQ����Ҫ����Ҽ���. 
 * �����ܱ�jQuery��С,����Ҳû����ôǿ��. 
 �����ļܹ���ȫ����jQuery.����˵����jQuery�ܹ���һ��DEMO. 
 * 
 ͸����,����Դ������ϰ���jQuery�Ŀ���Լ����õ��ĳ����ɺ����ģʽ.��
 ��˵����һ����ѧ�õ�С���. 
 * 
 * ϣ������Խ��Խ�����ϲ����jQuery,����jQuery! 
 * 
 */
/* 
 * ��Ȩ����: 
 * (1) ���ļ��е�JavaScript������Ӣ��ע�Ͱ�Ȩ��ԭ�������� 
 * (2) ���ļ��е�����ע�Ͱ�Ȩ�鱾������. �����������봫�����ļ�, 
 ������������ҵ��;. 
 */

/* 
 * jQuery 1.2.6 - New Wave Javascript 
 * 
 * Copyright (c) 2008 John Resig (jquery.com) 
 * Dual licensed under the MIT (MIT-LICENSE.txt) 
 * and GPL (GPL-LICENSE.txt) licenses. 
 * 
 * $Date: 2008-05-24 14:22:17 -0400 (Sat, 24 May 2008) $ 
 * $Rev: 5685 $ 

 */


/* 
 * 



 (����ע�� Techenicolor
 2011-2-11 21:11:28
 �հ�)
 ����jQuery���붼������һ��������(�������֮����������)�������������ڲ� 


 : 


 * (function(){ 


 * 


 * 


 //jQuery code runs here 


 * 


 * })(); 


 * 


 * ����, ��������������γɵıհ��ᱣ��jQuery�Ĵ���, 
 ���������������ڲ���jQuery�������ⲿ֮�䷢����ͻ(��ʹ������ͬ�ı�����) 
 . 

 * ����, ����������Ҳ��֤��jQuery�����ڵ�һʱ��õ���ʼ��. 

 */


(function(){


    /* 


     * д�������д��룬�ǳ��������Ŀ��ǣ� 


     * 
     �ڶ�⹲��Ļ����У��ܿ��ܻ�����˵Ŀ�ʹ����ͬ�Ĺؼ��֣��Ǿ��Ȱ��˼ҵ� 
     jQuery��$(�����������õĻ�)���������� 


     * 
     Ȼ���ٻ����Լ��ġ���Ҫ��ʱ���ٰ��Լ���jQuery,$�ؼ���ж�����ָ��˼ҵĴ�
     �����������ؼ��ֵ�ʹ��Ȩ.����jQuery.noConflict��ɻָ�. 

     * �ָ�����ϸ����, ��ο�jQuery.noConflict������ע��. 
     */
// Map over jQuery in case of overwrite 
// (����ע�� Techenicolor 2011-2-11 21:12:33 �հ�)����jQuery�Ĺؼ���, ��ñ���д��û���ָ�.
        var _jQuery = window.jQuery,
// Map over the $ in case of overwrite 
// ����$�Ĺؼ���, ��ñ���д��û���ָ�. 
        _$ = window.$;


    /* ��ǰ��������(Ҳ������������е������������γɵıհ���)��


     ȫ�����������е�jQuery��$����ע��������������������. 

     * ���������ʵ�����ǵ���jQuery.fn.init������һ��jQuery����. 

     * ʹ��jQuery���˿��ܻ����: 
     Ϊʲô��ֱ��ʹ��$('#someId')����ѡ����Ҫ�Ķ���? ��ô$�Ϳ�������? 
     $������ʲô��˼? ����Ĵ�����ܸ���һ���: 

     * ԭ��$������һ��jQuery���캯��������. ʹ��$()���ǵ����������������. 

     */


    /**


     * jQuery�Ĺ��캯��.ͨ��selectorѡ�������첢����һ��jQuery����.

     * @param {string} selector


     * @param {Object} context


     */


    var jQuery = window.jQuery = window.$ = function( selector, context )
    {


// The jQuery object is actually just the init constructor 'enhanced'


        /*
         * 
         (����ע�� Techenicolor
         2011-2-11 21:12:55
         �հ�)
         ʵ����,jQuery.fn.init����jQuery�����Ĺ��캯��. 
         �������jQuery������������. 

         */


        return new jQuery.fn.init( selector, context );
    };

// A simple way to check for HTML strings or ID strings 
// (both of which we optimize for) 
    /* ����:һ�����HTML�ַ�����ID�ַ����ļ򵥷���. 
     * ˵��: 
     * ������һ��������ʽ,���ڿ��ٵؼ���ַ����ǲ���HTML string or ID 


     string 
     */
    var quickExpr = /^[^<]*(<(.|\s)+>)[^>]*$|^#(\w+)$/,

// Is it a simple selector 
// isSimple��һ����ѡ������������ʽ.����˵ѡ�����ַ�������ֻ��һ��ѡ����,��:

// '#eleID'����һ���򵥵�ѡ����,��: 
// '#eleID .address'����һ������(complex)ѡ���� 
    isSimple = /^.[^:#\[\.]*$/,

// Will speed up references to undefined, and allows munging its name. 
        undefined;
    /* 
     * ��Ҫ���������undefined���н���: 
     * ECMAScript 

     v3�Ĺ淶����涨����Ϊundefined��ȫ�ֱ���,���ĳ�ʼֵ����undefined. 

     * 
     �������ǲ���ȷ�������ϵ��κ�һ��JavaScriptʵ�ֶ���ȫ�ֱ���undefined,��
     ô��ʱ���� 


     * ֻ��Ҫ�Լ�����һ������������ֵ����,����ֵ����undefined. 
     * 
     * �����Ǹ�undefined����������������һ������. 
     * 
     */

    /* 
     * ����Ķ�ͨ��jQuery.prototype�Ķ������滮jQuery�������Ҫ��Ϊ. 


     ����ͨ�����캯��(��jQuery,$)new������jQuery���󶼼̳�����jQuery.protot 
     ype 
     * �����Ժͷ���. ע��jQuery.prototypeʹ��������һ������:jQuery.fn. 

     ��jQuery�Ĵ��뵱��, ʹ��jQuery.fn������jQuery.prototype, ��ʵ��һ����. 
     */
    jQuery.fn = jQuery.prototype ={
        /**
         *
         (����ע�� Techenicolor
         2011-2-11 21:16:30
         �հ�)
         jQuery�ĳ�ʼ������. ÿ��new һ��jQuery�����ʱ��,
         �����������������ʵ�ֳ�ʼ��.
         *
         ��ʼ������Ҫ�����Ǹ���ѡ����selectorѡ��ƥ���Ԫ��,������ЩԪ�ط���
         һ��jQuery��֮Ϊmatched element set�ļ��ϵ���, ��󷵻����jQuery����.
         * ע��, jQuery����û��ʵʵ���ڵ�һ��"matched element
         set"����. �������ǵ��¶�����һ��jQuery����:
         * var jq = new jQuery('a');

         *
         ��ôҳ���ϵ�����a��ǩԪ�ؾͻ���jq[0],jq[1],jq[2]...,jq[n]����ʽ�洢��j
         Query����(��jq)����. jQuery����Щƥ�䵽��Ԫ�����߼��Ͽ�����һ��
         * ����, ����֮Ϊ"matched element set".
         *
         * @param {string} selector -ѡ����.
         ������ַ���ָ����Ҫѡ���Ԫ��.
         * @param {Object} context -ѡ������������.
         ��ָ��Ҫ��һ��ʲô��Χ֮��ѡ��seletor��ָ����Ԫ��.
         */


        init: function( selector, context ){
// Make sure that a selection was provided
// ���û�д���selector,��ôdocuemnt�ͻ��ΪĬ�ϵ�selector.û��selector����document��"����".��"matched element set"��������Ҫ
// ��һ��Ԫ��. 




            selector = selector || document;






            /*
             * ����Ҫ��selecotr������н��з���ļ��,��ͬ����,��ͬ�Ĵ���. 



             * selector���ܵ���������: 



             * (1) ֱ�ӵ�һ��DomԪ������ 



             * (2) �������� 



             * (3) ����(function)���� 



             * (4) jQuery����������������������� 



             * (5) string���� 



             * a) û��context����� 



             * 


             b) ��context����� 



             */






            /* ����, ���ھͷ�������д��� */





// Handle $(DOMElement) 





// �ǲ���(1) "ֱ�ӵ�һ��DomԪ������" ��?�����, 
            �ͽ����DomԪ��ֱ�ӷ���jQuery�����[0]������,
                ����ƥ��Ԫ�ؼ��ϵĴ�СΪ1, ����





            if ( selector.nodeType ){//��DomԪ�ؾ�Ӧ����һ��nodeType 




                this[0]= selector;





                this.length = 1;





                return this;





            }






// Handle HTML strings 





// �ǲ�������(5) - string����? 




            if ( typeof selector == "string" ){



// Are we dealing with HTML string or an ID? 





// ����:�����Ƿ����ڴ���HTML����ID�ַ���? 




                var match = quickExpr.exec( selector );






                /* 





                 * ͨ��match��������string���͵���������ֳ�����: 



                 * (1) ��HTML�ַ�������ID�ַ�������� 



                 * (2) ����,��'.className', 'tagName'֮��. 



                 */






// Verify a match, and that no context was specified for 
            #id





// �˶����ƥ��, ������Щû��Ϊ#id�ṩcontext�����. 




                if ( match && (match[1] || !context)){






// HANDLE: $(html) -> $(array) 





// ����������HTML: 




// 
                    ��ô����jQuery.clean���ַ���ת����������DOMԪ��Ȼ��װ��һ����������,
                        ��󷵻ظ�selector




// ����selector��󽫱����(2)����. 




                    if ( match[1])





                        selector = jQuery.clean([ match[1] ], context );


//clean�����þ��ǽ������HTML stringת����ΪDOM 




//Ԫ��, ����һ������װ��,��󷵻�. 





// HANDLE: $("#id") 





// ����������#id 




                    else {





                        /* �����#id, 
                         �Ǿ͵���JavaScriptԭ����getElementById 





                         * 
                         ��ЩjQuery�����������������н��龡��ʹ��idѡ���, ˵�����Ƚϸ�Ч. 
                         ��������Կ���, ���е����. 




                         */





                        var elem = document.getElementById( match[3] );






// Make sure an element was located 





// ����: ȷ��һ��Ԫ�ر���λ. ���ܹ�get��һ��Ԫ�� 





                        if ( elem ){






                            /* 





                             * ԭ������ֱ�ӷ��ؽ����, 
                             ��������IE��Opera��һ��СС��Bug, ���Ҫ����һ���ٷ���. 



                             */






// Handle the case where IE and Opera return 
                            items





// by name instead of ID 





// COMP: ����: 
                            ����IE��Opera����name����ID����Ԫ�ص�����





                            if ( elem.id != match[3])





//jQuery()���᷵��һ����document���ɵ�jQuery���� 





                                return jQuery().find( selector );






// Otherwise, we inject the element directly 
                            into the jQuery object





// ����, 
                            ���ǽ�ѡ�񵽵�Ԫ��ע�뵽jQuery�������, ��󷵻�.





                                return jQuery( elem );





                        }





// ������������е�����, 
                        ˵��match[3]��������getElementByIdѡ���κ�Ԫ��,
                            ��selector���ó�[], �ú���Ĵ�����ʰ��β





                        selector = [];





                    }







                }






// HANDLE: $(expr, [context]) 





// (which is just equivalent to: $(content).find(expr) 





// ����: ���� $(expr,[context]) 




// (���$(content).find(expr)��һ����) 




                /* 
                 ��������selector����HTML�ַ�������ID�ַ���(��'.class','div'֮��),�� 


                 ����context�½�һ��jQuery����, Ȼ��������������ٲ��� 





                 * selector��ָ����Ԫ��, ��󷵻�һ��jQuery����. 
                 ����ϸ��, ���Բο�jQuery.fn.find����������ע��. 



                 */





                else





                    return jQuery( context ).find( selector );





            }








// HANDLE: $(function) 





// Shortcut for document ready 





// �����ǲ�������(3)-����(function)����? 




// �������������һ��function, 
            ��ô����docuemnt�½�һ��jQuery����, �ú�ʹ��jQuery�����ready����,
                ��selector(��������һ������)��





// ��DOM Ready �¼�(��֪��ʲô��DOM Ready�¼�? Ctrl+F���� 
            "read:"!���һ�����������˵�� ).




// Ҫ�����������˵�Ĺ�����������е�'load'���ԵñȽϹ���. 
            �� jQuery 1.3.2����, ����Ĵ����Ѿ����Ľ�Ϊ:




            /* 





             * else if ( jQuery.isFunction( selector ) ) 



             * return jQuery( document ).ready( selector ); 



             */





            else if ( jQuery.isFunction( selector ))





                return jQuery( document )[ jQuery.fn.ready ? "ready" :


                    "load" ]( selector );





// ���������(2)��(4)(�Ӵ����п��Կ�������������ͬ�Ĵ����): 




// 
            ��������Ĵ���֮��,���������е�����(û��return),˵��selector��һ����
            �������(���߾���Array����). �����ǾͲ�������jQuery������Array��





// ��,��ʹ�� 
            jQuery.makeArray(selector)�������selector����ת����һ��������Array.




// 
                ���ʹ��setArray������ŵ��Լ�(Ҳ����this,����һ��jQuery����)�洢ƥ��
            Ԫ�ص�����(matched element set)����,Ȼ�󷵻��Լ����jQuery����





// �й�ϸ��, ���Բο�jQuery.fn.setArray, 
            jQuery.fn.setArray������ע��.





                return this.setArray(jQuery.makeArray(selector));
        },


// The current version of jQuery being used 
        /* 



         * jQuery��ǰ�汾�� 



         * ��Щ����������������ȷ�������ǲ���jQuery���� 



         */


        jquery: "1.2.6",

// The number of elements contained in the matched element set 
        /**



         *
         ����ƥ��Ԫ�ؼ��ϵĴ�С,����˵ͨ��ѡ�������ڵ���ѡ�����˶��ٸ�Ԫ�ء���
         �����ִ���length����





         *
         ������˵��"ƥ��Ԫ�ؼ���"��ָ����ÿһ��jQuery�����е�һ�����顣��������


         һ��ѡ��������һ��jQuery




         *
         ����ʱ��ѡ����ѡ�е�����ƥ���Ԫ�ؾͻ��������������档��jQuery("div"
         )���ĵ�������div�����ö�





         * �ᱻ����������������档



         *





         * ���µ�ע�����涼������"ƥ��Ԫ�ؼ���"������



         */


        size: function() {



            return this.length;
        },

// The number of elements contained in the matched element set 
// ƥ��Ԫ�ؼ��ϳ���,��ʼ����Ϊ0 
        length: 0,

// Get the Nth element in the matched element set OR 
// Get the whole matched element set as a clean array 
        /* 


         * ȡ��ƥ��Ԫ�ؼ����еĵ�N��Ԫ�� 



         */


        get: function( num ){



            return num == undefined ?






// Return a 'clean' array 





// 
                �����������num��һ��δ�����ֵ������һ��"�ɾ�"������.
                ��˼���Ƿ���һ���½������鸱��





            jQuery.makeArray( this ):






// Return just the object 





// ���num��ֵ��ֱ�Ӿͷ���num���λ���ϵ��Ǹ�Ԫ�� 





            this[ num ];
        },

// Take an array of elements and push it onto the stack 
// (returning the new matched element set) 
        /* 



         * 
         ʹ�ô����Ԫ������һ���µ�jQueryԪ��,������������prevObject���óɵ�
         ǰ�������(this).�����������ɵ�jQuery���󷵻�. 




         * �ƺ�jQuery�����ƥ��Ԫ�ؼ��ϳ�Ϊmatched elements set ���� 
         stack / ��ʱ��������Ϊʲô������" pushStack ", stack������. 



         * 





         * ANSWER:����ʽ�ķ��������У��кܶ�ĺ���"return 
         this"���Ա㲻����д����"obj.method2;obj.method2()"�����Ĵ��룬����ֱ��
         �� 



         * 
         "obj.method1().method2()"����������ͻ��൱��ࡣ������ʽ����������һ
         ��ǰ�ᣬ�Ǿ�Ҫ��֤����ÿһ��"return this"�ķ������ܾ��� 





         * "�ƻ���". 
         ���Ǻ���˵�����޸�jQuery�����ƥ��Ԫ�ؼ���.���ĳһ���������Ҫ�޸�ƥ
         ��Ԫ�ؼ���, ��ô���ͻ����pushStack����,�ѵ�ǰ�� 



         * jQuery���󱣴�����,�Ա��Ժ�ʹ��end�����ָ����jQuery����. 



         */



        (����ע�� Techenicolor
    2011-2-11 21:34:46
    �հ�)
    pushStack: function( elems ){



// Build a new jQuery matched element set 





        var ret = jQuery( elems );






// Add the old object onto the stack (as a reference) 





        ret.prevObject = this;






// Return the newly-formed element set 





        return ret;
    },

// Force the current matched set of elements to become 
// the specified array of elements (destroying the stack in the 


    process)
// You should use pushStack() in order to do this, but maintain 


    the stack
    /* 



     * 
     ԭ�ķ���:ʹ��ǰƥ��Ԫ�ؼ��ϱ����һ���ض���Ԫ�ؼ���(�����������ԭ����
     ƥ��Ԫ�صļ��Ͻ��ᱻ�ƻ�[Ҳ����ԭ�����Ǹ����ϲ�������].) 




     * ������뱣��ԭ�����Ǹ�ƥ��Ԫ�ؼ���,��ô��Ӧ��ʹ��pushStack() 



     * 





     * 
     ʹ��������������this����ԭ����ƥ����󼯺��������ó�һ���µļ���,��
     ��ʹ��pushStack()�򱣳�ԭ���ļ���. 




     */


    setArray: function( elems ){



// Resetting the length to 0, then using the native Array push 





// is a super-fast way to populate an object with array-like 
        properties






// 
        ��length��Ϊ0,Ȼ�����ñ���Array��push����(Ҳ����˵�������ָ�봫��Arra
        y.prototype.push,��Ϊ����������,Ȼ��ִ��. this������Ķ��󲢲���





// 
        Array����,����this����ʹ��Array����ž��е�push����,����ʹ����apply��
        ��).




// ����һ������������"������"���ԵĶ���ķ��� 





        this.length = 0;





//Array��push�������������ĩβ׷��Ԫ��.ֵ��ע�����Array���push����
        ���޸�this.length����.����





//Ϊʲôѡ��Array��push�ķ�������һ��ԭ��.�����ʹ��Array��push����,��
        ô����Ҫ����д����������jQuery




//�����length����,��ʹ����ֵ��ƥ��Ԫ�ؼ����е�Ԫ�ظ�����ƥ��. 




        Array.prototype.push.apply( this, elems );





//����׷����Ԫ�ص�jQuery���󷵻� 





        return this;
    },

// Execute a callback for every element in the matched set. 
// (You can seed the arguments with an array of args, but this is 
// only used internally.) 
    /* 



     * 
     ԭ�ķ���:Ϊƥ��Ԫ�ؼ����ڵ�ÿһ��Ԫ��ִ��һ��ص�����.(������������
     ��ʽ�ṩargs�������, ������������Ϊ�ڲ�����ʹ��) 




     * 





     * 


     ����ƥ��Ԫ�ؼ��������ÿһ��Ԫ��,����ÿһԪ�ص���callback�������д���.
     ����ƥ��Ԫ�ؼ��ϻ���ԭ���Ǹ�����,���������Ԫ�ض�������callback�Ĵ��� 





     * ���Կ��������Ĳ���ʵ�����ǵ�����jQuery�ľ�̬����each����ɵ�. 



     */


    each: function( callback, args ){



//thisָ����һ��jQuery����(�����Ӧ�ú����). 
        ����һ��jQuery������һ��������Ķ���, ���jQuery.each����Դ�����һ��





//�Դ�jQuery����, 
        Ҳ���jQueryƥ��Ԫ�ؼ����е�ÿһ��Ԫ�ض��ܱ�����.





            return jQuery.each( this, callback, args );
    },

// Determine the position of an element within 
// the matched set of elements 
    /**



     * ���ķ���:ȷ��һ��Ԫ����ƥ��Ԫ�ؼ����е�λ��(����)



     * @param {Object} elem
     -Ҫȷ��λ�õ��Ǹ�Ԫ��.��������һ��jQuery����.



     */


    index: function( elem ){



        var ret =-1;






// Locate the position of the desired element 





        return jQuery.inArray(





// If it receives a jQuery object, the first element is 
            used





        elem && elem.jquery ? elem[0]: elem





            , this );
    },

    /**



     *
     ��ȡ������Ԫ�ص�����ֵ(��Щ���Կ�������ͨ������ֵ,��title,Ҳ��������ʽ
     ����ֵ)




     *





     * name -��������



     * value -����ֵ. ����Ϊ��. Ϊ��ʱ��ʾҪ����



     * type -
     ��ʾҪ����/��ȡ��������һ��Ԫ������,������ʽ����.���û�д����������,
     �������һ�������;����д���(��"curCSS"),���ʾҪ������ʽ����



     */


    attr: function( name, value, type ){



        var options = name;






// Look for the case where we're accessing a style value 





        if ( name.constructor == String )





// ���û�д���Ҫ���õ�ֵ,��ô����Ҫ��ø����Ե�ֵ. 
            ����������ƥ��Ԫ�ؼ�������Ԫ�ص���Ӧ����





        if ( value === undefined )





            return this[0] && jQuery[ type || "attr" ]( this[0],
                name );






        /* 





         * �������һ����������return���: 



         * (1) 
         �����&&����Ϊ��������:���������߱��ʽ,˭Ҫ���������ֹ��,�ͷ���˭��
         ֵ. 





         * 
         ������,this[0]�����null��������������ת����false��ֵ(���0, 
         undefined), 




         * ��ô������ֹ,null(��������false�ȼ� [ == ] 
         ��ֵ)�ͻᱻ����. ��this[0]��ȷ 



         * ��ֵ,��ô���㲻����ֹ, ����&&�ұߵ�����, 
         �������ұ߱��ʽ����Ľ��. 



         * 





         * (2) �� " || 
         "�������Ҳ����,��������˭��������ֹ��, �ͷ���˭��ֵ. �ȼ������ 



         * �ı��ʽ, �������false�ĵȼ�ֵ( == 
         false),����ֹ����, ������߱��ʽ��ֵ. 



         * ����߱�ﷵ�ص���һ����false�ȼ۵�ֵ, 
         ��ô�����ұߵı��ʽ��, �����ظñ��ʽ�� 



         * ֵ 



         * 





         * (3) 
         �����������������type,���typeһ�����"curCSS". 



         */








// 
        ���������Ҫ���õ�ֵ,��options��Ϊһ��"�ֵ�"(����,��Key-Value��ʽ����
        �ݽṹ)




    else {





            options = {};





            options[ name ]= value;





        }






// Check to see if we're setting style values 





// 
        Ϊÿһ��jQuery��ƥ��Ԫ�ص���һ����������һ��.������������������:




// 
        �ڵ�ǰ��domԪ����,��opptions�ڼ�¼��ÿһ�����Զ���������Ӧ��ֵ.




// ��󽫴������jQuery���󷵻� 





            return this.each(function(i){






            /* 





             * ע������������ڵ� this, ���ĺ����Ѿ���ͬ. 
             ������ָ����ƥ��Ԫ�ؼ����е�ÿһ��DOMԪ�� 



             * ��������Ĵ����вŻ���this.style. 
             ���thisָ�����һ��jQuery����, ������ô������� 



             * ������? 



             */






// Set all the styles 





            for ( name in options )





                jQuery.attr(





                    type ?


//����д���type,�ͱ�ʾҪ������ʽ����;���û�����ʾҪ����һ������� 





                        this.style :





                        this,





                    name, jQuery.prop( this, options[ name ], type, i
                        , name )





//����propȡ����ȷ������ֵ(��"�������ֵ�Ƿ�Ҫ����λ?"�����Ĺ��������� 
            prop������)




            );





        });
    },

    /* 



     * ���������: 



     * (1) 
     ��û�д���valueֵ��ʱ��,��ȡ��һ��ƥ��Ԫ��key��ָ����ʽ���Ե�ֵ. 



     * (2) 
     ���еĴ���value��ʱ��,����ƥ��Ԫ�ؼ�����ÿһ��Ԫ����key��ָ������ʽ��
     ��ֵΪvalue 



     */


    css: function( key, value ){



// ignore negative width and height values 





// ԭ�ķ���:��width ���� height �����ø�ֵ���ᱻ���� 





        if ((key == 'width' || key == 'height') && parseFloat(value)
            < 0 )





            value = undefined;






// ������attr������ȡ��ʽֵ.ע��, 
        ���û�д������һ������,���ʾ��ȡ/���õ�����ͨ������(��title)������
        ��ʽ����.




            return this.attr( key, value, "curCSS" );
    },

    /* 



     * ����/��������ƥ��Ԫ�ص��ı� 



     * 
     ����Ƿ����ı��Ļ�,�����������ƥ��Ԫ�ذ������ı���������������ı���
     ���������HTML��XML�ĵ�����Ч�� 





     * ��������õĻ�,�򷵻�һ��jQuery���� 



     * 





     * text -Ҫ���õ��ı�����(��ѡ) 



     */


    text: function( text ){



        if ( typeof text != "object" && text != null )



            return this.empty().append((this[0] && this[0].
                ownerDocument || document).createTextNode( text ) );






        var ret = "";




        jQuery.each( text || this, function(){





            jQuery.each( this.childNodes, function(){





                if ( this.nodeType != 8 )//8��comment�ڵ� 





                    ret += this.nodeType != 1 ?





                        this.nodeValue :





                        jQuery.fn.text([ this ] );


//�ݹ��ȡthis�ڵ�text,ע��this��һ��domԪ�ص����� 





            });





        });






        return ret;
    },


    /* ����ΪAPI�ĵ�ժ��: 


     * ������ƥ���Ԫ���õ���Ԫ�ذ������� 
     * ���� '.wrap()' 


     �ǲ�ͬ�ģ�'.wrap()'Ϊÿһ��ƥ���Ԫ�ض�����һ�Ρ� 
     * 

     ���ְ�װ�������ĵ��в������Ľṹ����������ã������������ƻ�ԭʼ�ĵ�
     ������Ʒ�ʡ� 


     * 


     ���������ԭ���Ǽ���ṩ�ĵ�һ��Ԫ�ز������Ĵ���ṹ���ҵ����ϲ������
     Ԫ�أ����������Ԫ�ؾ��ǰ�װԪ�ء� 





     */


    wrapAll: function( html ){



        if ( this[0])





// The elements to wrap the target around 





            jQuery( html, this[0].ownerDocument )


//jQuery(this[0].ownerDocument).find(html); 





                .clone()





                .insertBefore( this[0])


//���֮��,��clone�����Ľڵ����this[0]���λ���� 





                .map(function(){






                    var elem = this;






                    while ( elem.firstChild )





                        elem = elem.firstChild;






                    return elem;





                })





                .append(this);//this��һ��dom Ԫ�ص����� 






        return this;
    },

    /* 



     * ��jQuery�����ڵ�ÿһ��ƥ��Ԫ���е�������ָ����html��װ���� 



     */


    wrapInner: function( html ){



        return this.each(function(){





            jQuery( this ).contents().wrapAll( html );





        });
    },


    /* 



     * jQuery�����ڵ�ÿһ��Ԫ�ض���ָ����html��װ���� 



     */


    wrap: function( html ){



        return this.each(function(){





            jQuery( this ).wrapAll( html );





        });
    },

    /**



     * ��jQuery�����ڵ�ÿ��ƥ���Ԫ���ڲ�׷�����ݡ�



     *





     * ���Կ���appendʵ�����ǵ�����jQuery.fn.domManip����������.



     * jQuery.fn.domManip��ʵ������DOM�޸ķ���(����,ɾ����)��"ĸ"����.



     *
     ֻҪ��domManip�����Ļ������޸ĵ��ò���,���ܽ�domManip��ͷ���������һ
     ��





     * ����.





     *





     *
     �����������޸���domManip�����һ������callback,ʹ֮��Ϊһ��׷��Ԫ�ص�
     ����.




     *





     * ͬʱ�ο�jQuery.fn.domManip



     */


    append: function() {



        /* 





         * 
         domManip�ڶ��������Ĳ���(true)��˵,��Ҫ���еĲ���������ܻ���<table>,
         ��IE�в���table��һЩ 





         * ����,�����ڴ˱��.������ʲô����,���Բο�domManip��ע�� 



         * �ڶ�������(false)��˵arguments�Ĳ����Ƿ���Ҫ��ת(������). 



         */





        return this.domManip(arguments, true, false, function(elem){





            if (this.nodeType == 1)





                this.appendChild( elem );





        });
    },

    /**



     * ��jQuery�����ڵ�ÿ��ƥ���Ԫ���ڵ���Ԫ��ǰǰ�������ݡ�



     *





     * ���Կ���prependʵ�����ǵ�����jQuery.fn.domManip����������.



     * jQuery.fn.domManip��ʵ������DOM�޸ķ���(����,ɾ����)��"ĸ"����.



     *
     ֻҪ��domManip�����Ļ������޸ĵ��ò���,���ܽ�domManip��ͷ���������һ
     ��





     * ����.



     *





     *
     �����������޸���domManip�����һ������callback,ʹ֮��Ϊһ��׷��Ԫ�ص�
     ����.




     */


    prepend: function() {



        /* 





         * 
         ע��domManip�ĵ���������(true),������arguments�ڵĲ������ᱻ������� 





         * 
         ��Ҫ��������(��arguments)Ϊ'<div>1</div><div>2</div><div>3</div>', 




         * 
         ��ô�����Ǳ�����֮��ͻ���'<div>3</div><div>2</div><div>1</div>' 




         */





        return this.domManip(arguments, true, true, function(elem){





            if (this.nodeType == 1)





                this.insertBefore( elem, this.firstChild );





        });
    },

    /* 



     * ��ƥ��Ԫ�ؼ����ڵ�ÿһ��Ԫ��ǰ�������� 



     * 





     * ˵��ͬ�� 



     */


    before: function() {



// ����֮ǰ��domManip��������"�ѹ�", 
        ��֤����������ǺϷ���(��<option>������<select>�İ�����)��IE

        bug�õ��޸��ȵȡ� 





return this.domManip(arguments, false, false, function(elem){





    this.parentNode.insertBefore( elem, this );





});
    },

    /* 



     * ��ƥ��Ԫ�ؼ����ڵ�ÿһ��Ԫ��֮��������� 



     */


    after: function() {



        /* 





         * 
         ע��domManip�ĵ���������(true),������arguments�ڵĲ������ᱻ������� 





         * 
         ��Ҫ��������(��arguments)Ϊ'<div>1</div><div>2</div><div>3</div>', 




         * 
         ��ô�����Ǳ�����֮��ͻ���'<div>3</div><div>2</div><div>1</div>' 




         */





// ����֮ǰ��domManip��������"�ѹ�", 
        ��֤����������ǺϷ���(��<option>������<select>�İ�����)��IE
        bug�õ��޸��ȵȡ� 





return this.domManip(arguments, false, true, function(elem){





    this.parentNode.insertBefore( elem, this.nextSibling );





});
    },

    /* 



     * ��ƥ���Ԫ���б��Ϊǰһ�ε�״̬�� 



     * ���Կ���, Ҫ��֤��������ܹ�ʵ��, 
     jQuery��ʵ��ͨ����jQuery�����ڱ�����һ�β�����jQuery�����������ʵ�ֵ� 
     .�������ͱ�������һ�ε�ƥ��Ԫ�ؼ���. 



     * һ�������, jQuery������û��prevObject������Ե�. 
     ����ֻҪ����pushStack�����Ĳ���֮��,jQuery����;�����prevObject����. 
     ����jQuery���� 



     * 
     �����pushStack���ص��Ǹ��µ�jQuery����.��鿴jQuery.fn.pushStack 




     */


    end: function() {



        return this.prevObject || jQuery( [] );





// ������pushStack�Ĵ���,���Խ�ϲ鿴,�����end�Ĺ���ԭ��. 




// pushStack: function( elems ) { 
// var ret = jQuery( elems ); 



// ret.prevObject = this; 





// return ret; 





// } 


    },

    /**



     *


     ����������ָ�����ʽƥ���Ԫ�ء�����������ҳ����ڴ����Ԫ�صĺ��Ԫ��
     �ĺ÷�����





     *
     ���Կ�����������jQuery.find�����������.����һ���ྲ̬����������ʵ����
     ��.




     *
     ����������pushStack�ı���jQuery����ƥ��Ԫ�ؼ��ϵ�����,ʹ��end�����ܹ�
     �ص��������ݸı�֮ǰ��״̬.




     * ����ɲ鿴jQuery.fn.end,jQuery.fn.pushStack������ע��.





     * @param {string} selector -������ַ���ָ����Ҫѡ���Ԫ��.
     ��'.titleBody','div', '#id'��



     */


    find: function( selector ){



//����ƥ��Ԫ�ؼ�����ÿһ��Ԫ�صĺ��Ԫ��(��Щ���Ԫ����selectorָ��), 
        ����Щ���Ԫ��ȫ�����������ŵ�elems��





        var elems = jQuery.map(this, function(elem){





            return jQuery.find( selector, elem );


//����ÿһ��Ԫ�صĺ��Ԫ�� 





        });






// 
        ���潫����pushStack��elemsת����һ���µ�jQuery����,������������preOb
        ject������Ϊthis, ���pushStack������¶��󷵻�,��find�ڽ��յ�





// ����¶���ʱ��,�ְ�������(return). 






        return this.pushStack( /[^+>] [^+>]/.test( selector ) ||
            selector.indexOf("..")>-1 ?



            jQuery.unique( elems ):





            elems );
    },

    /**



     * ��¡һ��jQuery����.



     *





     * @param {Object} events



     */


    clone: function( events ){




        /* 





         * 
         COMP:��������ֱ�ӿ�¡��,����IE�������һЩ���������ǲ��ò�Ҫ���������
         һЩ����. 




         * 
         ������map����������Բ�ͬ����������еĴ���.������IE��ʲô����,���Կ�
         ���� 





         * ���Ǵ��Ӣ��. 



         */





        var ret = this.map(function(){


//ע��jQuery�����map�������ص�һ��jQuery���� 






//�����IE����� 





            if ( jQuery.browser.msie && !jQuery.isXMLDoc(this)){





// IE copies events bound via attachEvent when 





// using cloneNode. Calling detachEvent on the 





// clone will also remove the events from the orignal 





// In order to get around this, we use innerHTML. 





// Unfortunately, this means some modifications to 





// attributes in IE that are actually only stored 





// as properties will not be copied (such as the 





// the name attribute on an input). 





                var clone = this.cloneNode(true),


//����true˵�����ӽڵ�ҲҪһ�𱻿�¡ 





                    container = document.createElement("div");



                container.appendChild(clone);





                return jQuery.clean([container.innerHTML])[0];





            }





            else





                return this.cloneNode(true);





        });






// Need to set the expando to null on the cloned set if it 
        exists





// removeData doesn't work here, IE removes it from the 
        original as well





// this is primarily for IE but the data expando shouldn't 
        be copied over in any browser





        var clone = ret.find("*").andSelf().each(function(){



            if ( this[ expando ] != undefined )





                this[ expando ]= null;





        });






// Copy the events from the original to the clone 





// ���¼���������Ҳһ����������¡�ĵĶ�����. 




        if ( events === true )





            this.find("*").andSelf().each(function(i){



                if (this.nodeType == 3)//3��TextNode 




                    return;





//���this��ָjQuery�����ϵ�����event���� 





                var events = jQuery.data( this, "events" );




//�������������ÿһ���¼�����.ÿһ��type����һ���¼�����,��click�� 





                for ( var type in events )





//����ÿһ���¼�����������handler,���¼�������. 
                    ע��,����"�¼�������".�¼�������





//ֻ��һ��. 




                for ( var handler in events[ type ])





//��clone[i]��type���͵��¼������events[ 
                    type ][ handler ]����¼����(���¼�������,�о��רҵһЩ...).




//�����ϸ��,��鿴jQuery.event.add������ϸ��. 




                    jQuery.event.add( clone[ i ], type, events[
                        type ][ handler ], events[ type ][ handler ].data );





            });






// Return the cloned set 





        return ret;
    },

    /**



     * ��ԭ����ƥ��Ԫ�ؼ�����ȥ��selector��ָ����Ԫ��.



     *





     *
     ���ڸı���ƥ��Ԫ�ؼ����е�Ԫ��,���Ե���pushStack������һ��"���˵�".��
     ������jQuery.fn.end�������ܻ�





     * ��Ϊԭ�����Ǹ�jQuery����.



     *





     * @param {Object} selector
     ����ȡֵ��Χ��jQuery.fn.init��selectorһ��.



     */


    filter: function( selector ){



        return this.pushStack(





            /* 





             * 


             ���selector��һ������,��ôʹ�����������jQuery������ƥ��Ԫ�ؼ����е�
             ÿһ��Ԫ�ؽ��й��� 





             */





            jQuery.isFunction( selector ) &&





                jQuery.grep(this, function(elem, i){





                    return selector.call( elem, i );





                }) ||






                /* 





                 * ������Ǻ���, �Ǿͽ���jQuery.multiFilter���д���. 



                 * this ָ����һ�����˵�������, 
                 ��Ҫ�������Χ��(����ƥ��Ԫ�ؼ�����)���й���. 



                 * 
                 multiFilter�ڹ���ƥ��Ԫ�ؼ��Ϸ��洦�ں��ĵĵ�λ,��෽���������������
                 �����. 




                 */





                jQuery.multiFilter( selector, this ) );
    },

    /**



     * ��jQuery�����ƥ��Ԫ�ؼ�����ȥ����seletorָ����Ԫ��.



     *





     * @param {Object} selector selector��ȡֵ��Χ��jQuery.fn.initһ��



     */


    not: function( selector ){




//Ҫ��selector�ֿ��������������Ŷ:�ַ�������������ṹ? 





//������ַ��� 





        if ( selector.constructor == String )





// test special case where just one selector is passed in 





// isSimple��һ���򵥵�����ѡ����,�� '#id' 
            ������ѡ����,��û�пո�' '.





// �� '.div1 h1'������ѡ����������һ����Ϊ���ӵ�ѡ���� 





            if ( isSimple.test( selector ))





// multiFilter�����һ������ true 
        ��ʾ����'��ģʽ'.�����뿴jQuery.multiFilter��ע��





// 
        '��ģʽ'���������,selector��ָ����Ԫ�ؾͲ�Ҫ.���������,��selector��
        ָ����Ԫ�ؾ��ǽ����.




            return this.pushStack( jQuery.multiFilter( selector,
            this, true ) );





    else





        selector = jQuery.multiFilter( selector, this );






//����selector�ǲ������������ 





        var isArrayLike = selector.length && selector[selector.length
            -1] !== undefined && !selector.nodeType;






        return this.filter(function() {





//ע��, thisָ����ƥ��Ԫ�ؼ����е�ÿһ��Ԫ�� 





            return isArrayLike ?





//selector���������,��ô������ݾͻ�����һ����Χ.��this��ָ��Ԫ�ز���
                �����Χ��





//�Ͱ�Ԫ�ر���(��ʱjQuery.inArray(this,selector) 
                < 0 ������true).




            jQuery.inArray( this, selector )< 0 :






//���selector�����������Ԫ��,��ôֻҪ����selector���߼������,�Ϳ���
            ����





            this != selector;





        });
    },

    /**



     * ��selectorָ����Ԫ����ӵ�ƥ��Ԫ�ؼ�����ȥ.



     *





     *
     �����޸���ƥ��Ԫ�ؼ��ϵ�����,����ʹ����pushStack.����μ�pushStack�Լ�
     end��ע��





     * @param {Object} selector



     */


    add: function( selector ){



        return this.pushStack( jQuery.unique( jQuery.merge(





            this.get(),





            typeof selector == 'string' ?



                jQuery( selector ):





                jQuery.makeArray( selector )





        )));
    },
    /**



     *
     ����һ������ֵ,ȷ��ƥ��Ԫ�ؼ����е�Ԫ���Ƿ���selectorָ����һ����Χ֮
     ��.




     * �����һ����,��ô�ͷ���true;



     * ���û��һ����, ����selector��һ����Ч��ѡ����,����false.



     *





     * @param {Object} selector ����Ϸ���selector.�μ�jQuery.fn.init



     */


    is: function( selector ){



        /* 
         !��������Ȱ�����������ת����һ���������͵�ֵ.�κ�ֵx,����ȡ��(!!)֮��
         �����԰���ת����Ϊһ������ֵ 





         * 
         multiFilter��һ��'�๦��'������,�������������˵�����Ҫ��Ԫ��(��������
         ����������true);Ҳ���������� 





         * 
         ����ʣ��selector��ָ����Ԫ��(����������Ϊfalse���߲��������������). 




         */





        return !!selector && jQuery.multiFilter( selector, this ).


            length > 0;
    },

    /**



     *
     ����һ������,ȷ��ƥ��Ԫ�ؼ����е�Ԫ���Ƿ����selectorָ��������.




     * ����ͬ is ����



     * @param {Object} selector



     */


    hasClass: function( selector ){



        return this.is( "." + selector );
    },

    /**





     * ����ÿһ��ƥ��Ԫ�ص�ֵ�������ǻ�ȡƥ��Ԫ�ؼ�������Ԫ�ص�ֵ



     * �����һ���ǿյķ���ֵ,˵�����óɹ�.



     *





     * @param {Object} value



     */
    val: function( value ){



//���valueΪundefined˵��Ҫȡֵ������Ҫ��ֵ. 




        if ( value == undefined ){




//���ƥ��Ԫ�ؼ��ϲ��ǿյ� 





            if ( this.length ){





                var elem = this[0];




// We need to handle select boxes special 





// ����ڵ���<select>,��ô��Ҫ�ر�Ĵ��� 





                if ( jQuery.nodeName( elem, "select" )){


//nodeName��������һ���ڵ㲻��ָ�����͵Ľڵ� 





                    var index = elem.selectedIndex,





                        values = [],





                        options = elem.options,





                        one = elem.type == "select-one";


//���<select>�Ƕ�ѡ�Ļ��ǵ�ѡ��? 



// Nothing was selected 





                    if ( index < 0 )





                        return null;




// Loop through all the selected options 





                    /* 





                     * ���forѭ���ĳ�ʼ������ʹ����Ƕ�׵�' ? : 
                     '�����,�Ƚϻ�ɬ. 



                     */





                    for ( var i = one ? index : 0, max = one ? index


                        + 1 : options.length; i < max; i++ ) {



                        var option = options[ i ];




                        if ( option.selected ){





// Get the specifc value for the option 





                            /* 





                             * 
                             COMP:IE��option��ȡֵ�ķ�ʽ��Ȼ����ô���鷳.��λ��ס�ͺ�. 




                             */





                            value = jQuery.browser.msie && !option.


                                attributes.value.specified ? option.text : option.value;




// We don't need an array for one selects 





// ����ǵ�ѡ��<select>,�Ͱ�ֵ���� 





                            if ( one )





                                return value;




// Multi-Selects return an array 





// ����Ƕ�ѡ��,�Ͱ�ֵ�Ž�һ������. 




                            values.push( value );





                        }





                    }




                    return values;








// Everything else, we just grab the value 





                }//�������<select>���������Ľڵ� 





                else





// /r ƥ��һ���س��� 





                    return (this[0].value || "").replace(/\r/g, "");






            }






            return undefined;





        }






        if( value.constructor == Number )





            value += '';




        return this.each(function(){






            /* 
             ע���,this���ڲ���ָ��jQuery����,����ƥ��Ԫ�ؼ����ڵ�ÿһ��Ԫ�� */





            if ( this.nodeType != 1 /* ELEMENT_NODE */)





                return;





            /* 





             * 
             ���Ҫ���õ�ֵ��һ������,����each��ǰ��������Ԫ�ص���radio����checkbox
             �� 





             * ��ô���������ǵ�checkedֵ.���õĹ�������: 



             * 
             �����ǰԪ�ص�ֵ(this.value)��������(this.name)�������������ķ�Χ֮��, 




             * �Ͱ�checkedֵ��Ϊtrue.����Ϊfalse. 



             */





            if ( value.constructor == Array && /radio|checkbox/.test(
                this.type ))





                this.checked =(jQuery.inArray(this.value, value) >=
                    0 ||





                    jQuery.inArray(this.name, value) >= 0);






// �����ǰԪ����<select> 




            else if ( jQuery.nodeName( this, "select" )){



                var values = jQuery.makeArray(value);





// 
                �ɵ�ǰ���<select>Ԫ�ص�����option�����½�һ��jQuery����.�������ܹ���
                ��jQuery�ķ���





// ����ز�����Щ������. 




                jQuery( "option", this ).each(function(){


//��each������<select>��ÿһ��<option>���� 






                    /* ע����,���� this ָ�����һ��<option>Ԫ�ؿ� */





                    /* 





                     * 
                     ������ӵ�value(���������<option>Ԫ������)����text 
                     ��values���綨�ķ�Χ֮�� 





                     * ��ô�ͰѺ��ӵ�selected����Ϊtrue. 



                     */





                    this.selected =(jQuery.inArray( this.value,
                        values ) >= 0 ||





                        jQuery.inArray( this.text, values ) >= 0);





                });






//���values�ĳ���Ϊ0,������selectedIndexΪ-1. 




                if (!values.length )





                    this.selectedIndex =-1;






            }





// �������������,�Ǿ�ֱ�Ӱ�ֵ���ý��������� 





            else





                this.value = value;





        });//end function 'each' 
    },

    /**



     * ����/��ȡԪ�ص�html����



     * ��valueû��ָ����ʱ�򷵻�ƥ��Ԫ�ؼ�������Ԫ�ص�innerHTML.



     *
     ���ָ����value,��ôƥ��Ԫ�ؼ�����ÿһ��Ԫ�ص���Ԫ��Ϊ��value���ɵ�Ԫ
     ��.




     *





     * ͬʱ�ο�:jQuery.fn.append



     *





     * @param {Object} value



     */


    html: function( value ){



        return value == undefined ?





            (this[0]?





                this[0].innerHTML :





                null





                )





            :





            this.empty().append( value );
    },
    /**



     *
     ��ƥ��Ԫ�ؼ����е�ÿһ��Ԫ��֮�����value��Ϊ�ֵܽڵ�,������remove����
     ��valueֵ�ڵ�����'<>'�ķ���





     * ȥ��.



     *





     * @param {Object} value



     */


    replaceWith: function( value ){



        return this.after( value ).remove();
    },

    /**



     *
     ��ƥ���Ԫ�ؼ�������Ϊһ��Ԫ�ء����Ԫ����ƥ��Ԫ�ؼ����е�λ�ñ�Ϊ0��
     �����ϳ��ȱ��1��





     * ���������������¹���һ��jQuery����,�����䷵��.
     �����޸���ƥ��Ԫ�ؼ���,������slice��������ʹ����



     * pushStack������һ��'�ָ���',
     �Ա���ʹ��jQuery.fn.end�����ָ�����ǰ��״̬.



     *





     * ͬʱ�ο�jQuery.fn.pushStack �� jQuery.fn.slice



     *





     * @param {Object} i iָʾҪ����һ������Ԫ��



     */


    eq: function( i ){





        return this.slice( i, i + 1 );
    },

    /**



     * ��ƥ���Ԫ�ؼ�������Ϊ���ɸ�Ԫ�ء�



     * ���������������¹���һ��jQuery����,�����䷵��.
     �����޸���ƥ��Ԫ�ؼ���,����ʹ��pushStack



     * ������һ��'�ָ���',
     �Ա���ʹ��jQuery.fn.end�����ָ�����ǰ��״̬.



     *





     * ͬʱ�ο�jQuery.fn.pushStack



     *





     * @param����Ĳ�����Ҫ����JavaScript
     Core��Array�����slice������Ҫ��ָʾҪ����һ������Ԫ��



     * slice��Ҫ��������:



     * ��һ������ָ����ȡ��λ��,�ڶ�������ָ����ȡ����.



     */


    slice: function() {



        return this.pushStack( Array.prototype.slice.apply( this,


            arguments ) );
    },

    /**



     *
     ʹ��callback����ƥ��Ԫ�ؼ����е�ÿһ��Ԫ��,�����pushStack�½�һ��jQue
     ry����,��󷵻������





     * ��jQuery����.



     *





     * ����ϸ�ڿ��Բο�pushStack��ע��.



     *





     * ע��:



     * ��ʵ������������jQuery.map��̬�����������,������ֵ��һ������.



     * ��jQeury.fn.mapҲ���Ǳ�������һ��ʵ������,
     ���ķ���ֵȴ��һ��jQuery�Ķ���.



     *





     * @param {Function} callback ������ӳ��ĺ���.



     */


    map: function( callback ){



        return this.pushStack( jQuery.map(this, function(elem, i){





//callback������Ϊelem�ķ���������, 
            ��ôcallback�����ڵ�thisָ�ľ������ڴ����ƥ��Ԫ�ؼ����е�Ԫ��.





                return callback.call( elem, i, elem );





        }));
    },

    /**



     * ��this.prevObejct�ڵ�ƥ��Ԫ�ؼ���Ҳ�ӽ���ǰ��ƥ��Ԫ�ؼ���



     * ע��:this.prevObject��һ��jQuery���������.



     */


    andSelf: function() {



        return this.add( this.prevObject );
    },


    data: function( key, value ){



        var parts = key.split(".");



        parts[1]= parts[1]? "." + parts[1]: "";






        if ( value === undefined ){





            var data = this.triggerHandler("getData" + parts[1]+ "!"
                ,[parts[0]]);






            if ( data === undefined && this.length )





                data = jQuery.data( this[0], key );






            return data === undefined && parts[1]?





                this.data( parts[0]):





                data;





        } else





            return this.trigger("setData" + parts[1]+ "!",[parts[0
                    ], value]).each(function(){





                jQuery.data( this, key, value );





            });
    },

    removeData: function( key ){



        return this.each(function(){





            jQuery.removeData( this, key );





        });
    },


    /* domManip ��ʵ�� Dom manipulate����д. 


     * 
     ��ÿһ��jQueryƥ��Ԫ�ؼ����ڵ�Ԫ�ض�ִ��һ��callbak(callback�����ǲ���
     ���޸ĵ�), argsΪ����. 




     * 
     ���ͬʱ���������args���д����Ա�֤args��dom�ڵ���ȷ��(��<option>����
     Ҫ��<select>�İ�����) 




     * 
     ���Ȿ����Ҳ��֤�˰�����args�ڵĽű����ھ����dom�ṹ����֮���ִ��,��
     ���˳���. 




     */





    /* 





     * Ϊ���ܹ����õ����domManip�����Ĺ���, 
     ���Խ��jQuery.fn.append��˵���˺���������: 



     * ��append�������������Ĵ���:return this.domManip(arguments, 
     true, fals, function(elem){ 



     if (this.nodeType == 1) 





     this.appendChild( elem ); 





     }); 





     * 





     */ //true //false //function(){... 


    domManip: function( args, table, reverse, callback ){



// args�������������ַ���:"<b>Hello</b>" 





// ���length>1 ��Ҫclone 




        var clone = this.length > 1, elems;






// 
        ����jQuery����(this)ƥ��Ԫ�ؼ����е�ÿһ��Ԫ��,���������������Լ�����
        ÿһ��Ԫ�ؽ��д���





// �����������:Ϊÿһ��Ԫ�ؽ���callback����,������args 




// ����: 
        ���callback�Ĺ�����ΪԪ��׷������(��append),��args����Ҫ׷�ӵľ�����
        ��





        return this.each(function(){





            if (!elems ){





                elems = jQuery.clean( args, this );


//jQuery.clean֮��,elems���һ������.���������װ����һЩdomԪ��.��Щd 
                omԪ����args�ڱ�ʾXHTML��





//�ַ������������ݵ�domԪ�ص���.������鿴jQuery.clean����. 





                if ( reverse )





                    elems.reverse();





            }






            var obj = this;


//Ϊ�˷�����������Ĵ������,������һ�����[1]. ע��, 
            this��һ��domԪ�ص�����. ����jQuery���������.






//��IE��,�����Ҫ��table�в���tr(�����һ��tr), 
                IEҪ������tbody�ڽ��в���.




// ���µ�if����˵Ҫ��tbody�ڽ��в���, 
                ���û��tbody���Լ���һ��,Ȼ���ٲ���





            if ( table && jQuery.nodeName( this, "table" ) && jQuery.
                nodeName( elems[0], "tr" ))



//appendChild����ֵ��һ��ָ�������ӽڵ������ 





                obj = this.getElementsByTagName("tbody")[0] || this.


                    appendChild( this.ownerDocument.createElement("tbody") );





// ������ֲ���(��������)�������к��нű�, 
            �Ȱ���Щ�ű�װ���������,��������������





            var scripts = jQuery( [] );






// ����ÿһ��Ҫ����(��������)�Ķ���(elem)����һЩ����. 




// ��Щ�����������: ����������溬�нű�, 
            ����Щ�ű���ӵ�һ���ű�������,��������ִ��.





                jQuery.each(elems, function(){





                    var elem = clone ?


//true����˼��˵, 
                        �Ѱ���jQuery(this)�ϵ��¼�Ҳһ����¡





                    jQuery( this ).clone( true )[0]:// 


                    clone���ص���һ��jQuery����,������ƥ��Ԫ�ؼ�����





// 
                    ֻ��һ��Ԫ��, ����clone(true)[0]����this��һ������





                    this;






// execute all scripts after the elements have been 
                    injected





// 
                    ���������������溬��script,�ü����Ȱ���Щscriptװ����,
                        �ȵ�������е����ݶ����������, ִ�����������������нű�





                    if ( jQuery.nodeName( elem, "script" ))



                        scripts = scripts.add( elem );





                    else {





// Remove any inner scripts for later evaluation 





                        if ( elem.nodeType == 1 )





                            scripts = scripts.add( jQuery( "script", elem
                            ).remove() );






// Inject the elements into the document 





// �����objҪô���������[1]����this( obj = 
                        this ), Ҫô��this�ڵ�tbody( obj =
                            this.getElementByTagName("tbody")||... )




// 
                        �����obj��ִ��callbackָ���Ĳ�������(elemΪ����).





// ����, callback��һ��׷�����ݵĺ���, 
                            ��ô�������obj׷������elem




                        callback.call( obj, elem );






                        /* 





                         * ������������д��뻹��һ��Ҫ����: 



                         * ����������ʹ��domManip����������ʹ�õ�: 



                         * domManip(arguments,true,true,function(elem){ 



                         * 


                         // callback body 





                         * }); 



                         * ���ر�ע��callback body �ڵ�this�Ͳ���elem. 



                         * 
                         ����callback.call(obj,elem)ʹ����obj��Ϊ��������������,��obj��Ȼ�ͳ�Ϊ
                         ��this 




                         * 
                         ��ָ��Ķ���.������,��domManip�����callbackֻ��һ����ʽ����elem. 




                         * 





                         */






                    }





                });//end each 





//Ϊһ��Ԫ�ز���������֮��(��ע����HTML),�͸�ִ�иղű���Ľű� 





            scripts.each( evalScript );





        });//end each 
    }
};




// Give the init function the jQuery prototype for later instantiation 
// ͨ����һ��֮��, jQuery.fn.initҲ��ʵ����һ��jQuery����Ķ�����. 
jQuery.fn.init.prototype = jQuery.fn;

function evalScript( i, elem ){
    if ( elem.src )


        jQuery.ajax({





            url: elem.src,





            async: false,





            dataType: "script"



        });



    else



        jQuery.globalEval( elem.text || elem.textContent || elem.


            innerHTML || "" );

    if ( elem.parentNode )



        elem.parentNode.removeChild( elem );


}

function now(){
    return +new Date;
}

/**
 *


 ����jQeury�����к���Ҫ��һ������.ͨ�������ǾͿ������ɵ���jQuery����jQu

 ery������������չ�Լ���Ҫ�ķ���
 */
jQuery.extend = jQuery.fn.extend = function() {
// copy reference to target object 
    var target = arguments[0] || {}, //target�Ǳ���չ�Ķ���, 

        Ĭ���ǵ�һ������(�±�Ϊ0)������һ���ն���{}




    i = 1,


//i��һ��"ָ��",��ָ����չ����.Ҳ����˵Ҫ�������������Ի򷽷���չ��
        ����չ������





    length = arguments.length, //�����ĳ���. 
        ͨ������������ж���չ��ģʽ





    deep = false, //�Ƿ�Ҫ���������չ(����). 
        ��һЩ������һ������,���������ж���ʱ,����Ҫȡ����:����Ҫ���ǿ�������
    ������?




        options;//��ǰ���ڿ�������չ��������� 



// Handle a deep copy situation 
// 


    ������������׸�������һ��boolean���͵ı������Ǿ�֤��Ҫ������ȿ�����
����ʱ��������argumens[1]����Ҫ�����Ķ���.������������,�Ǿ�Ҫ��һЩ
// "����"����, 
    ��Ϊ���ʱ��,target����ָ�����һ��������������������Ҫ�����Ķ���.

        if ( target.constructor == Boolean ){



        deep = target;//����target�Ĳ���ֵ 





        target = arguments[1] || {};


//��target����ָ������Ҫ�����Ķ���. 





// skip the boolean and the target 





// ����˵��һ��ָ�룬����ָ��argument[2]. 
        arguments[0],arguments[1]�Ѿ��õ�����,
            ʣ����Ҫ����ľ���arguments[2],arguments[3],...





// ����Ĳ���. 




        i = 2;
    }

// Handle case when target is a string or something (possible in 


    deep copy)
// ���target����objet ����Ҳ����function ��Ĭ��������Ϊ{}; 
    if ( typeof target != "object" && typeof target != "function" )


        target = {};



// extend jQuery itself if only one argument is passed 
// ����:���ֻ������һ������, ��ô��չ�ľ���jQuery����: 
// ���ʹ��jQuery.extend����չ����ôthis ����jQuery. 


    �����Ļ��������еĺ����ͻ���ΪjQuery�µľ�̬������


// ���ʹ��jQuery.fn.extend����չ�� this 
    ָ�ľ���jQuery.fn�ˡ����������ĺ����������Ծͻ���ΪjQuery����ķ�����
    �����ˡ� 


if ( length == i ){





    target = this;





    --i;
}

    for (; i < length; i++ )



// Only deal with non-null/undefined values 





// ֻ����Щ��null����չ����Ű�����չ������չ��������. 




        if ((options = arguments[ i ]) != null )





// Extend the base object 





// ��չ����չ����(base 
            object),��options�ڵ����Ի򷽷���չ������չ��������





    for ( var name in options ){


//����Ҫ����ÿһ���ӽ����ķ��������� 





//target�Ǳ���չ���� 
//options����չ����, ���ķ��������Խ��ᱻ��չ��target�� 





        var src = target[ name ], copy = options[ name ];






// Prevent never-ending loop 





// taget == copy 


        ˵��Ҫ�ӽ�����������ָ���Լ��ģ�����Ҫ������ȿ���ʱ������ˡ���������
        ����������������������Լ���������Ϊ�Լ���һ����Ա





        if ( target === copy )





            continue;






// Recurse if we're merging object values 





// 
        ʹ�õݹ�ķ���ʵ����ȿ��� // 
        ���������˵,Ҫ��û��nodeType, ���Ƿ�Dom��������, ���Զ���������ȿ���





        if ( deep && copy && typeof copy == "object" && !copy
            .nodeType )






            target[ name ]= jQuery.extend( deep,





// Never move original objects, clone them 





                src || ( copy.length != null ?[]:{})





                , copy );






// Don't bring in undefined values 





// ���Ҫ�ӽ��������ò��Ƕ��������( 
        �����Ǻ������򵥱�����ֻҪ����undefined ) �ǾͰ����üӽ���:
            �����Ǹ���Ҳ�������½�name������Ի򷽷�





    else if ( copy !== undefined )





            target[ name ]= copy;






    }



// Return the modified object 
// ����չ�õĶ��󷵻� 
    return target;
};

/* 

 �������jQuery.extend��jQuery.fn.extend����֮��,�Ժ����Ǿ�ʹ���������

 ��ΪjQuery 
 * ����jQuery.fn,�ֻ���jQuery.fx���������(��չ)������. 
 */


var expando = "jQuery" + now(),

//��Ԫ����Ҫ��������ʱ,����ʹ��expando: id = elem[expando];data = 
    jQueyr.catche[id];

uuid = 0, // 


    ���һ��Ԫ����Ҫ��������,��ôuuid++�ͻ��Ϊ���Ļ�����ȫ��Ψһ���.
    windowData = {}, //�������ݻ�����. 

// exclude the following css properties to add px 
// ������ЩCSS�����ǲ���Ҫ�ӵ�λ'px'�� 
    exclude = /z-?index|font-?weight|opacity|zoom|line-?height/i,
// cache defaultView 
// 

    �����ﶨ��һ��defaultView����Ҫ�ĺ�����Ϳ���ֱ�ӵ���,��������дһ����
document.XXXXXXXX��.

    defaultView = document.defaultView || {};





// ------------------------------------- jQuery��̬���ĺ��� 



// 
��Щ��̬����ΪjQuery����ʵ����������������Ҫ�ĺ���������.jQuery�ܶ��
ʵ������ʵ�����ǵ��������ﶨ��ķ���'Ļ��'��������



// 



// 
ͨ��jQuery.extand���'�޴�'�ĺ�������,���jQuery�ĺ��ĺ����������岢��
����jQuery��������ռ���.


// 
    ע��,��Щ�������Ǿ�̬��.����ζ����������ǵ�ʱ�����ʹ���������޶�����
    ,���jQuery.noConfiict,���Ҳ�����jQueryʵ����


// ������������,��jQuery(seloector).swap�ǲ��Ϸ���. 
//-------------------------------------------------------------------


jQuery.extend({
    /**



     * �������ռ�$�黹.������������Ͳ�������jQuery����$��



     * @param {Object} deep



     */


    noConflict: function( deep ){



        window.$ = _$;//�ղ��Ǵ�������$��������'��'���˼�. 





        if ( deep )


//�������deep,˵����jQuery����ؼ��ֵ�ʹ��ȨҲҪ����.��ıȽ�'deep'�� 
            .




        window.jQuery = _jQuery;






        return jQuery;
    },

// See test/unit/core.js for details concerning this function. 
    /**



     * ����һ�������ǲ���Function.



     * ���Կ���,���һ�������ǲ��Ǻ������ǱȽ϶�'����'��.



     * @param {Object} fn



     */


    isFunction: function( fn ){






        /* 





         * ����ʹ���˽�����ת��Ϊ�ַ���(ʹ�ú������� 
         +"" 
         �ķ���),Ȼ����������ʽ�����Ƿ����һ��������Ӧ���е�ģʽ. 



         * �������������ɻ���: 



         * (1) һ������Ϊ'function(){}'���ַ���; 



         * (2) 
         һ�����л����ַ���Ԫ�ص�����,��['function','()','{}'],�������һת����
         �ַ���,�ͳ�Ϊ��(1)��˵����� 



         * 





         * ����Ϊʲô����typeof fn 
         ��ȷ��һ��Ԫ���Ƿ�Ϊfunction,��������'��Ȥ����'����,�ֿ���������ĳЩ
         ��ʽ����� 



         * 
         �᷵�ز���ȷ�Ľ��(����IE5.5+,Firefox3,Safari3.0.4,Chrome,Opera9.62��
         �����Թ�typeof,������� ).�� 





         * ������������. 



         */






        return !!fn && typeof fn != "string" && !fn.nodeName &&



            fn.constructor != Array && /^[\s[]?function/.test( fn +


            "" );
    },


// check if an element is in a (or is an) XML document 
    /**



     * ���һ��Ԫ���Ƿ���XML��document



     * @param {Object} elem



     */


    isXMLDoc: function( elem ){



//body��HTMLDocument���еĽڵ㳣������ڵ����жϵ�ǰ��document�ǲ���һ
        ��XML���ĵ�����





//ע��,HTMLDocment�ӿ���XMLDocument����չ,��HTMLDocument���ض��ڴ���HT 
        ML�ĵ��ķ���





//(��getElementById��)�ǲ�������XML�ĵ�ʹ�õ�. 




        return elem.documentElement && !elem.body ||





            elem.tagName && elem.ownerDocument && !elem.ownerDocument


                .body;
    },

// Evalulates a script in a global context 
    /**



     * ԭ�ķ���:



     * ��ȫ�ֵ������������нű�



     *





     * @param {Object} data



     */


    globalEval: function( data ){



//����trim������data��ͷ�Ŀո�ȥ��. 




        data = jQuery.trim( data );





//������нű����ݵľ�����,û�оͽ�������,����. 




        if ( data ){





// Inspired by code by Andrea Giammarchi 





// 
            http://webreflection.blogspot.com/2007/08/global-scope-evaluation-anddom.
                html


            var head = document.getElementsByTagName("head")[0] ||
                    document.documentElement,
                script = document.createElement("script");

            script.type = "text/javascript";
            if ( jQuery.browser.msie )
                script.text = data;
            else
                script.appendChild( document.createTextNode( data ) );

// Use insertBefore instead of appendChild to 
            circumvent an IE6 bug.
// This arises when a base node is used (#2709). 
                head.insertBefore( script, head.firstChild );
            head.removeChild( script );
        }
    },

    /* 
     * �ж�һ��Ԫ�ص�nodeName�ǲ��Ǹ�����name 
     * 
     * elem -Ҫ�ж���Ԫ�� 
     * name -����elem.nodeName�ǲ������name 
     */
    nodeName: function( elem, name ) {
        return elem.nodeName && elem.nodeName.toUpperCase() == name.
            toUpperCase();
    },
    /**
     *
     ȫ�����ݻ�����.ÿһ����Ҫ��������Ԫ�ض��������￪��һ���ռ���Լ�����
     ��
     */
    cache: {},

    /**
     * ��jQueryȫ�����ݻ������л�������.
     *
     * ע���"���ݻ�����"�ŵ���.�ڼ���������������һ������,����һЩ
     * ���ݶ���.
     *
     * @param {Object} elem Ҫ�����Ԫ���ϴ������
     * @param {Object} name ���ݵļ���
     * @param {Object} data ���ݵļ�ֵ
     */
    data: function( elem, name, data ) {
        elem = elem == window ?
            windowData :
            elem;

        /* 
         ��ȡԪ�ص�id.���id������һ����expando��������. 
         * expando ֻ��һ���� " jQuery " + now() 
         ��ɵ��ַ��� 
         * 
         ������Ϊelem��һ������,ͬʱ������Ե�ֵҲ��ȫ�����ݻ������� 
         * 
         ĳһ�������.����������־Ϳ����ҵ�Ԫ����Ӧ�Ļ�������. 




         * 
         ע���"���ݻ�����"�ŵ���.�ڼ���������������һ������,����һЩ 





         * ���ݶ���. 



         */





        var id = elem[ expando ];






// Compute a unique ID for the element 





//���Ԫ�ػ�û��expando���,�����½�һ�� 





        if (!id )





            id = elem[ expando ] = ++uuid;






// Only generate the data cache if we're 





// trying to access or manipulate it 





        /* 





         * 
         ����д���name����,��ô����jQuery.cache�����½�һ�����ڱ�Ԫ�ص�cache 




         */





        if ( name && !jQuery.cache[ id ])





            jQuery.cache[ id ] = {};






// Prevent overriding the named cache with undefined values 





// ����(����): ����δ�����ֵ���ý���. 




        if ( data !== undefined )





            jQuery.cache[ id ][ name ]= data;






// Return the named cache data, or the ID for the element 





// 
        ���ѻ�������ݷ���.ֵ��ע�����,��û�д���name�����֮��,��������Ԫ
        �ص�id.���ֲ���data������nameֵ���÷�





// ���Բμ�jQuery.unique��������jQuery.find���� 





        return name ?





            jQuery.cache[ id ][ name ]:





            id;
    },

    /**



     * ȡ��Ԫ�صĻ��������.



     *





     * @param {Object} elem



     * @param {Object} name



     */


    removeData: function( elem, name ){



        elem = elem == window ?





            windowData :





            elem;





//ȡ��Ԫ�ص�ȫ��ID 




        var id = elem[ expando ];






// If we want to remove a specific section of the element's 
        data





// �����ɾ����Щ���� 





        if ( name ){





            if ( jQuery.cache[ id ]){





// Remove the section of cache data 





                delete jQuery.cache[ id ][ name ];






// If we've removed all the data, remove the 
                element's cache 


                name = "";

                /* 
                 �������forѭ�����ϵش�jQuery.cache[id]ȡ����������,�����뵽name, 
                 * 
                 һ��name�����һ������ת��Ϊtrue��ֵ,for��ѭ����ͻᱻִ��.ִ��֮�� 
                 * 
                 ��Ȼ��break...���Ǿ�����һ������:���Ԫ���Ƿ����Զ��������. 
                 * ע��,Ԫ�صļ̳����Բ��ܱ�for 
                 inѭ��ö��.�����Object�м̳������� 
                 * toString�����Ͳ��ܱ�for in���ʵ�. 
                 */
                for ( name in jQuery.cache[ id ] )
                    break;

                if ( !name )
//������name��Ȼ�ǿյ�,��ô��˵��jQuery,cache[id]����Ҳû��������,��
                    �԰����

//���ݻ���ȥɾ����.�ݹ����removeData.��ʱ,removeData����ִ�еľ�����
                ���Ǹ�
//else����Ĵ�����. 
                jQuery.removeData( elem );
            }

// Otherwise, we want to remove all of the element's data 
        }

// Otherwise, we want to remove all of the element's data 
// 
        ��Щ��Ӣ��Ƚ�ˮ,�ҷ���һ��,�Ǻ�:����,����Ҫɾ��Ԫ�����л��������.
// 
            Ҳ����˵,��û�а�nameֵ��������ʱ��(���д�һ��elem����),˵��Ҫɾ��Ԫ��
        elem�ϵ����л�������.
            else {
// Clean up the element expando 
            /* 
             ɾ��Ԫ���ϵ�expando����.����delete������ɾ�����Ԫ�ص�expanddo����.��
             ����������,����������� 
             * �ɵ�ǰ�������IE����,��catch�г���removeAttribute. 
             * 
             * TEACH��ѧʱ��: 
             * 
             removeAttribute��������w3c��׼��1��DOM��API.��1��DOM���ִ���������Ѿ�
             �õ����൱�㷺��֧��. 
             * 
             Ҳ����˵,�����������ʽ�������,ֱ��ʹ��removeAttribute������try/catch
             Ҳ�ǿ��Ե�.delete���� 
             * 
             ��������JavaScript����,Ҳ����˵,ֻҪ�Ǹ�JavaScript�Ľ������Ͳ�Ӧ�ò���
             ʶdelete.�������� 
             * try/catch����delete����.�����˾���removeAttribute. 
             */
            try {
                /* TEACH��ѧʱ��: 
                 * 
                 ע����,delete��������ֻ��ɾ��Ԫ�ص����Զ���,��������ɾ�����������õ���
                 ���ַ������.�����ڴ�ռ��� 





                 * 
                 ���������ջ��Ƶ�����.����ԱΨһҪ�����ľ����������ܹ�������!���C++��d 
                 elete�൱��ͬ,C++����ԱҪע��. 




                 * 
                 ����,delete����ɾ��һ������,���ǲ���ɾ����var����ı���.������ʽ�����
                 ������ɾ��. 




                 */





                delete elem[ expando ];





            } catch(e){





// COMP: ������IE��delete�����һ��bug: 




// IE has trouble directly removing the expando 





// but it's ok with using removeAttribute 





// 
                ����:ֱ��ɾ��exando������IE�л������.������removeAttributeһ���ܴﵽ
                ɾ�����Ե�Ŀ��.




                    if ( elem.removeAttribute )





                elem.removeAttribute( expando );





            }






// Completely remove the data cache 





// 
            ��ȫɾ��������.��������Ҹ�һ��,deleteֻ��ɾ��һ����ַ������,Ҫ������
            һ���ڴ�ռ��Ǳ������������˵����.




                delete jQuery.cache[ id ];





        }
    },

// args is for internal usage only 
    /**



     *
     ���������е�ÿһ��Ԫ��.��ÿһ��Ԫ�ص���callback������д���.jQuery����
     �д���ʹ�õ��������.




     *





     * object -
     ����Ҫ����������������������,���߸ɴ����һ����ͨ����





     * args -



     */
    /**



     *





     * @param {Object} object -
     ����Ҫ����������������������,���߸ɴ����һ����ͨ����



     * @param {Object} callback -����objectʱ, ִ�еĴ�����.



     * @param {Object} args -��Ҫ��callbackʹ�õ��ڲ�����



     */


    each: function( object, callback, args ){



        var name, i = 0, length = object.length;






// ����� 
        callback������args




        if ( args ){





// length == undefined ˵�� object����������( array-like 
        )����,�ǾͲ���ʹ���±�������������ֻ�� for ( name in object )




                if ( length == undefined ){





                    for ( name in object )//���� 
                        object�ڵ�ÿһ������,����������Ϊcallback��������,args��Ϊcallback�Ĳ�
                    ��������callback




//��ʵ���ǵ���callback�������������,��args����callback����ʱҪ�õ���
                    ����






// 
                    ��callback�ڴ���ĳһ�����Ժ󷵻�falseʱ,�Ͳ��öԺ�������Խ��д�����.
                        ����ʲôʱ�򷵻�false, ��������callback������,��ϲ��.




                        if ( callback.apply( object[ name ], args ) ===
                            false )





                    break;





                }






// 
            else�Ļ�,˵��object��������Ķ���(�󲿷��������jQuery����),�ǾͿ�����
            �±�ķ�ʽ������





        else





            for (; i < length;)





                if ( callback.apply( object[ i++ ], args ) ===
                    false )





                    break;






// A special, fast, case for the most common use of each 





        }






// ���û�� args ������ 





        else {






// length == undefined ˵�� object����������( array-like 
        )���ǲ������±�ķ���������





            if ( length == undefined ){





                for ( name in object )





//call 
                    ������һ��������applyһ��,��һ�������ĵ�����.
                        call����Ĳ�������Ϊcallback�Ĳ���





//���Կ���,���θ�callback,apply��������,��call����һ��һ���� 





                if ( callback.call( object[ name ], name, object[
                    name ] ) === false )





                    break;





            }





//��������Ķ���,����ͨ���±�ķ�ʽ������ 





            else





                for ( var value = object[0];





                      i < length && callback.call( value, i, value )
                          !== false; value = object[++i] ){}





        }






        return object;
    },

    /* 



     * 
     ������ֵ���д���.ȡ����ȷ������ֵ.��,�������ֵ�Ƿ�Ҫ���ϵ�λ"px", 
     �ȵ�. 




     * 





     * elem - domԪ�ض��� 



     * value -����ֵ 



     * type -�����ֵ�ʹ�������ʽ������ 



     * i - domԪ����jQuery����ƥ��Ԫ�ؼ����е����� 



     * name -������ 



     */


    prop: function( elem, value, type, i, name ){



// Handle executable functions 





// �������ֵ��function, 
        ����elem�ϵ������function(i��Ϊ����),function����Ľ������Ϊvalue




        if ( jQuery.isFunction( value ))





            value = value.call( elem, i );






// Handle passing in a number to a CSS 
        property


//exclude�б�ʾ��һЩ����Ҫ�ӵ�λ������ֵ 





        return value && value.constructor == Number && type ==
            "curCSS" && !exclude.test( name )?



            value + "px" :



            value;
    },

    /**



     *
     jQuery.className�����ռ�,����������ռ��϶�����һϵ����������Ԫ��class
     Name���Եķ���.




     *
     ������������ռ��ڵĺ�������'���⿪��',ֻ���ڲ�ʹ��.���⿪���ķ�������
     ��Щ�����İ�װ����.




     */


    className:{



// internal only, use addClass("class") 





        /**





         * ��һ����ͨ��DOMԪ�����һ������



         * �ڲ�ʹ��,�����⹫��



         *





         * @param {Object} elem



         * @param {Object} classNames



         */





        add: function( elem, classNames ){






            /* ������������split������classNames�ÿո�' 
             '�ֿ�,�ŵ�һ��������.Ȼ��ʹ��jQuery.each����������ÿһ�� 





             * 
             className.���Ԫ��û�����className,�ǾͰ����className�ӵ�Ԫ�ص�class 
             Name�ĺ���.����,��ʲô���� 





             * ������.�뿴����,���а�������һЩû��˵����ϸ��: 



             */






            jQuery.each((classNames || "").split(/\s+/), function(i,
                                                                  className){





                if ( elem.nodeType == 1/*NODE.ELEMENT_NODE*/ && !
                    jQuery.className.has( elem.className, className ))





                    elem.className += (elem.className ? " " : "")+
                        className;





            });





        },






// internal only, use removeClass("class") 





        /**





         * ȥ��ĳ��Ԫ���ϵ�className



         * �ڲ�ʹ��,�����⹫��



         * @param {Object} elem



         * @param {Object} classNames



         */





        remove: function( elem, classNames ){






            /* 
             ע��,���´����е�jQuery.grepҲ��һ��filter��������.���Բο�jQuery.grep
             ������ע��. */





            if (elem.nodeType == 1/* NODE.ELEMENT_NODE */)





                elem.className = classNames != undefined ?





                    jQuery.grep(elem.className.split(/\s+/), function
                        (className){





//���className��classNames���Ǹ����鵱��,�Ͱ������˵�,����Ҫ. 




                        return !jQuery.className.has( classNames,
                            className );





                    }).





                        join(" ")//���ʣ�µĽ����" "������� 


                    :





                    "";



        },






// internal only, use hasClass("class") 





        /**





         * ����elem��������,��û��classNameָ��������



         * �ڲ�ʹ��,�����⹫��



         *





         * @param {HTMLElement} elem



         * @param {string} className



         */





        has: function( elem, className ){





//��elem��className��" 
            "�зֿ����γ�һ������,Ȼ���� 





//jQuery.inArray�����ڲ�������. 




            return jQuery.inArray( className,(elem.className || elem
                ).toString().split(/\s+/))>-1;





        }
    },

// A method for quickly swapping in/out CSS properties to get 


    correct calculations


    /**



     * ����һ��������˼�ĺ���:



     *
     ���һ��Ԫ�ز�����һ����״̬,��ôֱ�ӻ�ȡ����ĳЩ����ֵ�����ǲ���ȷ��.




     *
     ��offsetWidth/offsetHeight��Ԫ�ز��ɼ���ʱ��,ֱ�ӻ�ȡ���ǵ�ֵ�ǲ���ȷ
     ��.




     * ����Ƚ�Ԫ�ص�visibilty����Ϊ position: "absolute",
     visibility: "hidden", display:"block"



     * Ȼ�������Ҫ��ʽֵ,���ԭ������ʽ�������û�ȥ.



     *





     * @param {HTMLElement} elem ��ͨ��DOMԪ��



     * @param {Object} options
     ����.����װ��һЩ��ʽ�ļ�ֵ��,�������ü�����ʽֵʱ��"����"



     * @param {Function} callback
     ����������������û�����ִ��.����ִ����֮��,Ԫ�ص���ʽ���ᱻ����.



     */


    swap: function( elem, options, callback ){





        var old = {};





// Remember the old values, and insert the new ones 





// �Ѿɵ�CSS��ʽ��������,Ȼ�����µ� 





        for ( var name in options ){





            old[ name ]= elem.style[ name ];





            elem.style[ name ]= options[ name ];





        }






//���������µ���ʽֵ֮��,�Ͻ�'�ɻ�',��ȡ��Ҫ����ʽ��ֵ.ע����Щֵ,��û
        �л����µ�����֮ǰ,���޷���ȷ��ȡ��.




            callback.call( elem );






// Revert the old values 





// ��ȡ���,�ָ�ԭ������ʽ 





        for ( var name in options )





            elem.style[ name ]= old[ name ];
    },

    /**



     * ��ȡԪ�ص�ǰ��CSS��ʽֵ.



     *





     * @param {HTMLElement} elem Ԫ��



     * @param {string} name ��ʽ������



     * @param {Object} force
     һ�������Ŀ���,Ϊtrue��ֱ�ӻ�ȡԪ�ص�������ʽ��ֵ.��ȡʧ�ܾ��ٳ��Ի�ȡ
     Ԫ�صļ�����ʽ.���



     *
     Ϊfalse���߲��������ֵ,����ڻ�ȡ������ʽ֮ǰ�ȿ���������ʽ����û��na
     me��ָ������ʽ��ֵ.




     */


    css: function( elem, name, force ){



// 
        �����Ҫ��ȡwidth������height����,��Ҫ���⴦��.���⴦���ǻ������µĿ�
        ��:




// 
            ���ǲ���ֱ��ʹ��Ԫ�ص�width����height��������ȡ��Ӧ��ֵ,����ʹ����offs
        etWidth/Height. ��ô��ȡwidht/height




// ����Ҫ�Խ������'�޼�'.��Ϊ����border��padding������. 
        �þ��忴����Ĵ���.




            if ( name == "width" || name == "height" ){



            var val,//�������Ҫ���صĽ�� 





// 
                ��������Ǵ�������Ҫ���õ�jQuery.swap������,���忴���������߲ο�jQue
            ry.swap




            props ={ position: "absolute", visibility: "hidden",


                display:"block" },




// 
                ȷ������Ҫ��ȡ����width����height.��width��Ҫע�����ҵ�padding��border
            ;��height��Ҫע������





            which = name == "width" ?[ "Left", "Right" ]:[


                "Top", "Bottom" ];




// 
            ���Ƕ�׶�����ڲ�������������Ԫ�ص�width/height.��ʹ��offsetXX��ȡwid
            ht/heightֵ��ʱ��Ҫע�⽫border




// ��padding ��ȥ. 




            function getWH() {





                val = name == "width" ? elem.offsetWidth : elem.
                    offsetHeight;





                var padding = 0, border = 0;





//which��һ������,����ʹ��each�������������ÿһ���ַ���. 




                jQuery.each( which, function() {





//ע��,����this���õ���һ���ַ���,Ϊ "Left", 
                    "Right" �е�һ��, ����"Top", "Bottom" �е�һ��.





                        /* 
                         �������padding��border(���һ�������),�����Ŀ������������õ�offset 
                         Width/offsetHeiht 




                         * �н����Ǽ���.������Ҫ˵��: 



                         * (1) 
                         ʹ��offsetWidth������width����Ϊwidth��������,���û����HTML������widt 
                         h���Ի�����JS���� 



                         * 
                         ����ʽ����width��ֵ,��ô���޷���ȡԪ�ص�width/height����ֵ,��ʹ����ʽ
                         �ļ���������Ԫ�ظ���ʽ��ֵ. 




                         * 
                         ĳЩ����Ӧ��Ԫ�����ǲ�û����ʽ�����κεط���������width/height,����ʱ
                         ���ֵ�ȷ��Ҫ��ȡ��Щ����Ӧ 





                         * 
                         Ԫ�ص�width/heightֵ.��ʹ��offsetXXX�Ϳ���������Щ�����µ�Ӧ������. 




                         * (2) 
                         offsetXXX��ֵ�ǰ�����padding��border��(ע��,������margin),��������Ĵ�
                         ����Ҫ�����Ǽ��� 



                         */






                        padding += parseFloat(jQuery.curCSS( elem,
                        "padding" + this, true)) || 0;



                    border += parseFloat(jQuery.curCSS( elem,
                        "border" + this + "Width", true)) || 0;



                });





                val -= Math.round(padding + border);





            }





//���Ԫ����'visible'����ʽ,ֱ�ӵ���getWH��ȡ��Ҫ��ֵ.��ο�jQuery.fn. 
            is������ע��.




                if ( jQuery(elem).is(":visible"))



            getWH();






//���û��visible,������ȷ������ȷ�ػ�ȡ��width����height��ֵ,Ϊ�˷�ֹ
            ������,����jQuery.swap�����Ƚ�





//��Ԫ������������������{ position: "absolute", 
            visibility: "hidden", display:"block" },�ٻ�ȡ





//Ԫ�ص�width/height��ֵ,������ʮ�þ�����.(ע��,swap������������Ԫ��
        ����ʽֵ).����Ϊʲô��swap����





//��������,���Բο�jQuery.swap������ע��. 




        else





        jQuery.swap( elem, props, getWH );






//���ػ�ȡ����width/heightֵ. 




        return Math.max(0, val);





    }






//������ǻ�ȡwidth/height��ֵ,�Ͳ��õ���border/padding������,ֱ�ӵ��� 
    'Ļ��'��curCSS�����ʽ�Ļ�ȡ.
        return jQuery.curCSS( elem, name, force );
},

/**
 *
 ��ȡԪ�ص�ǰ����ʹ�õ�CSS����ֵ.�������������ʵ�ֻ�ȡԪ����ʽֵ��'Ļ
 ����'.
 *
 ���ܹ���ȡԪ��Ŀǰ�����չ�ֳ�������ʽ��ֵ,���������ֵ�������Ļ�����
 ��(��Ƕ��ʽ��css�ļ�)���������.
 *
 * @param {HTMLElement} elem Ҫ��ȡ���������Ԫ�ص�css
 * @param {string} name css���Ե�����
 * @param {Object} force
 һ�������Ŀ���,Ϊtrue��ֱ�ӻ�ȡԪ�صļ�����ʽ��ֵ.
 *
 ���Ϊfalse���߲��������ֵ,����ڻ�ȡ������ʽ֮
 *
 ǰ�ȿ���������ʽ����û��name��ָ������ʽ��ֵ.
 */
curCSS: function( elem, name, force ) {
    var ret, style = elem.style;

// A helper method for determining if an element's values 
    are broken
// 
    ����:һ�������ж�Ԫ�ص�ֵ�Ƿ�"����"(���Ƿ���ȷ)�ĸ�������.
    /**
     * �÷�����Ҫ���Safari.
     *
     ��Safari�л�ȡԪ�ص�color��ʽ������ֻ�ȡ���������.Ϊ���ж��Ƿ��ܹ���
     ȷ��ȡһ��Ԫ�صļ�����ʽ
     * ��д�������������ĸ�������.
     *
     * @param {Object} elem Ҫ�жϵ�DOMԪ��.
     */
        function color( elem ) {
        /* 
         * 
         COMP:��Safari�л�ȡԪ�ص�color��ʽ������ֻ�ȡ���������. 
         * 
         �������Safari�Ϳ��Է���false��.��Ϊ���ǲ�������������. 
         */
        if ( !jQuery.browser.safari )
            return false;

        /* 
         * ��������ܹ����е�����, ˵����ǰ�������Safari. 
         * ��Safari�л�ȡԪ�ص�color��ʽ������ֻ�ȡ���������. 
         * 
         ʹ�����������д������Ϊ��Ӧ���������:(ע��,����Ĵ��벢�����������
         ��,ֻ����һ�ֱ��������) 

         * 
         ���getComputedStyle���ܻ�ȡԪ�صļ�����ʽ,��ô����true(!ret),˵������
         ���������.��Ϊ�� 
         * 
         CSS2Properties��û��,�Ǿ͸�����˵���������ȡcolor��ʽ��ֵ��. 
         * 
         ���getComputedStyle��ȷ�Ƿ����˷ǿյ�CSS2Properties����,�ǾͿ����ܷ�
         ��ȡ�ǿհ׵�color 
         * ����.�뿴���´���... 
         */

// defaultView is cached 
        /* COMP: 
         * 
         getComputedStyle�����ĵڶ���������Mozilla��Firefox��ʵ�ֶ�αԪ�صĲ��� 
         . 
         * 
         ����Խ�����������Ϊ":after"��":before".�����������������������в���
         ʡ��. 
         * 
         ����IE��֧�������ĵ���.һ����������Ƕ�αԪ��Ҳû����Ȥ,����Ϊ��ʡ�ó�
         ����,���� 
         * ����һ����������Ҷ����ڶ���������Ϊnull. 
         */
        var ret = defaultView.getComputedStyle( elem, null );
        return !ret || ret.getPropertyValue("color") == "";

    }

    /* We need to handle opacity special in IE 
     * 
     COMP:IE�е�͸�����������ȡ��w3c�Ĳ�һ��.��������˶�֪����. 
     */
    if ( name == "opacity" && jQuery.browser.msie ) {
// ע��, 
        ����style��ʵ��elem.style����.�����е����ret������'opacity'��ֵ
        ret = jQuery.attr( style, "opacity" );

        /* 
         * 
         ����Ĵ������ͨ��ret��ֵ�Ƿ�Ϊ""���жϵ���ʲô���͵�������Ӷ�������
         Ӧ��opacityֵ 
         * 
         ���ret=="",˵��styleû��opacity�������,��ǰ�������IE(IEʵ��͸����ʹ
         ��filter),����1, 
         * 100%��͸��. ��ret!="",�Ǿ�ֱ�ӷ��ؿ�. 
         */
        return ret == "" ?
            "1" :
            ret;
    }


    /* Opera sometimes will give the wrong display answer, this 
     fixes it, see #2037 
     * 
     COMP:�����ƺ�����������jQuery���ж���һЩ��"��"�Ĵ���,�������ǰ�styl 
     e��������,Ȼ������һ�� 





     * 
     �µ�ֵ,��Ȼ��ѱ��������ľɵ�ֵ���û�ȥ.����������Ϊ�˽��ĳЩ�������
     ��CSS��Ⱦ�ϵ�����.��Ӣ�� 





     * 
     ע����˵������,���������Ȥ,���Ե�jQuery�Ĺٷ���վ�Ͽ������Ϊ#2037��
     ���issue������ַ�ǣ� 





     * http://dev.jquery.com/ticket/2037 



     * Ҳ���Բ���jQuery.swap����������ע��. 



     */





    if ( jQuery.browser.opera && name == "display" ){



        var save = style.outline;





        style.outline = "0 solid black";



        style.outline = save;





    }








    /* Make sure we're using the right name for getting the 
     float value 





     * 
     COMP:��ʵ����Ҳ�漰����һ������������.����float�����ʽ������w3c�н�cs 
     sFloat,���� 





     * IE�����styleFloat 



     */





    if ( name.match( /float/i ))





        name = styleFloat;


//styleFloat�����������Ĳ�ͬ��ѡ��ʹ��'cssFloat(w3c)����styleFloat(I 
    E)' 





// ���û��Ϊforceָ��ֵ,�ǾͲ���"ǿ��ֱ�ӻ�ȡ������ʽֵ". 




// ��ô���ȷ���style[]�ڵ���ʽֵ. 
    ע��,������style����ȡ����ʽֵֻ��Ԫ��������ʽ����





// 
    ����������(��ʽ�ļ��ȵط�)���õ���ʽֵ.�����ȷ����name��ָ����������
    ʽ��ֵ,���Խ�ret������.




        if (!force && style && style[ name ])





    ret = style[ name ];






    /* ���û���Ǹ���ʽ������ֵ, 
     ˵�������ʽ����Ӧ�õ������ط���. ����Ĵ������Ϊ�������Ŀ�� */





    /* COMP: 





     * 
     ����������Ǹ�if����û���ҵ�name��ָ����style,��˵�������ʽ��ֵ������
     ������ʽ������,�Ǿ�Ҫ�õ� 





     * ������ʽ��,Ҳ������������else if 
     ��Ҫ��������.defaultView.getComputedStyle��w3c�ķ���. 



     * ��window.currentStyle����IE�ķ���. 



     */





else if ( defaultView.getComputedStyle ){// 
        <--����Ƿ����defaultView.getComputedStyle





        //
        �о�˵��������ѭw3c��׼���������.





        // Only "float" is needed here





        if ( name.match( /float/i ))





        name = "float";




        /*





        * ������ʽ�ı�������д����Ҫ��css��׼��ʽ,��:



        * backgroundColor -> background-color



        * marginTop -> margin-top



        */





        name = name.replace( /([A-Z])/g, "-$1" ).toLowerCase();




        //��ȡelem�ļ�����ʽ.��Щ��ʽ���߶�����һ��css�ļ���,�ֻ��߶���������
        �ĵط���<head>�е�<style>��ǩ��.




        var computedStyle = defaultView.getComputedStyle( elem,
        null );






        /*





        *
        ���ϵ�computedStyle������һ��CSS2Properties���ʵ��,ͨ����������getP
        ropertyValue




        * ����,����һ����ʽ������,
        ���ܻ�ȡ��ʽ��ֵ.�������if�������������ȡԪ�صļ�����ʽ.



        *
        ע��if�е�!color(elem),������˼Ϊ"��ȡelem��color��ʽ����ʧ��,getCompu
        tedStle�ܹ���ȷ�����Լ���





        * ������ʽֵ".



        */





        if ( computedStyle && !color( elem ))





        //����if�Ĳ���,�����ܹ���ȷ�ػ�ȡԪ�صļ�����ʽֵ.���Է��ĵػ�ȡname��
        ָ����������.




        ret = computedStyle.getPropertyValue( name );








        // If the element isn't reporting its values properly in
        Safari





        // then some display: none elements are involved





        /*





        *
        �������else�Ĵ�������������Ϊ!color(elem)��false.��˵�������ڻ�ȡԪ
        �صļ�����ʽֵ��ʧ��.




        * ����Ҫ˵��һ����Ҫ��֪ʶ��:CSS(Cascade Style
        Sheet)�ǲ����ʽ�����˼,������������˶�������"���"



        *
        ����.ʵ����"���"��CSS��һ�������������.һ��Ԫ�ص�ǰչ�ֳ�������ʽ,��
        ʵ�����Լ��������ȵ���ʽһ��һ��





        * ���ӵĽ��.
        ������ʽҪ��ȡ����ʽֵ�������ֵ��ӵĽ��.
        ���Ե�������ʽ��������ʱ��,���������Ȼ��Ȼ�ؾ���



        * ���Լ��Լ�������,һ��һ���������.



        *
        ������������else���Ǵ�Ԫ���Լ���ʼ,������������������.�ڱ����Ĺ���
        ��ʹ��һ�ֽ�swap�ķ���,��Ԫ�ص�





        *
        display����Ϊblock,��������������ȡĳЩ��ʽ��ֵ(��Ϊ������ʾ���������
        �������Լ�dispalyΪnone�����).




        * ��swap�������Ҳ������Ԫ�ص�displayֵ.



        */





        else {





            var swap = [], stack = [], a = elem, i = 0;








// Locate all of the parent display: none elements 





// 
            ���Լ���ʼ,һֱ���ϲ���,���ֲ���������ȡ�������ʽֵ��Ԫ�ؾͰ����Ž�st
            ack��(ѹջ)




            for (; a && color(a); a = a.parentNode )





            stack.unshift(a);//������ͷ"ѹ��"Ԫ�� 






// Go through and make them visible, but in reverse 





// (It would be better if we knew the exact display 
            type that they had)





            /* 





             * 
             �����µ�forѭ����,���Ǵ��������ȿ�ʼ,����˳��(��������㵽���ڲ�)
             ����Ԫ�ص�display����Ϊ�ɼ�(block), 




             * ���Ҽ�¼��ÿһ��Ԫ��ԭ�ȵ�display����,�������û�ȥ. 



             * ��������displayΪblock,Ȼ��do 
             something,�������display�ķ���,John Resig(jQeury����,��ʦ��) 



             * ��֮Ϊ Swap. 
             ��jQueryԴ������,Ҳ��������һ����jQuery.swap���ڲ�����. 



             */





            for (; i < stack.length; i++ )





            /* 
             ����һ��for��,�������Ƚ�Ԫ���Լ��ӽ���stack��,���������Ƿ񾭹�color��
             �Ĳ���.�����Ҫ�������� 





             * color�����ж��ǲ���ÿ��Ԫ�ض�������. 
             ע��,����a���п�����������ȷ�ػ�ȡ������ʽ��.���� 



             * swap.length == stack.length ���� swap.length 
             == stack.length - 1. 



             * ��������˺���Ĵ������swap[ stack.length -
             ]�Ƿ�Ϊnull���ж�.�����null,˵��Ԫ�� 



             * 
             �ļ�����ʽ����(��Ϊ�������Ż���swap����"����"),���Է��Ļ�ȡ. 




             */





            if ( color( stack[ i ])){





            swap[ i ]= stack[ i ].style.display;





            stack[ i ].style.display = "block";



            }






        // Since we flip the display style, we have to
        handle that





        // one special, otherwise get the value





        /*





        *
        ���ǲ�������displayΪblock�ķ�������ȡ�����ļ�����ʽ,�����Ҫ��ȡ�ļ�
        ����ʽ����display�Լ���?




        *
        ���´�����˵,���Ҫ��ȡ�ļ�����ʽ������display������display��Ԫ�صļ�
        ����ʽû��broken,��ô����





        *
        ��computedStyle���Ļ�ȡ.�����display������swap����"����"(!=null),����
        ���ķ��ؽ��retΪ





        * "none". ����Ϊʲô��none,����ұ������(<-TODO).



            */





            ret = name == "display" && swap[ stack.length -1 ]
            != null ?





            "none" : 



( computedStyle && computedStyle.getPropertyValue 
( name ) ) || ""; 






// Finally, revert the display styles back 





// ����:���,�ָ�ԭ������ʽ 





for ( i = 0; i < swap.length; i++ ) 





if ( swap[ i ] != null ) 





stack[ i ].style.display = swap[ i ]; 





}//end else 






// We should always get a number back from opacity 





/* 
��������Ĵ�����Ҫ�ļ�����ʽ��Ӧ���н����.��Щ���Ҫô��������ֵҪô
����"" 




* 
�ر�ض�opacity���д���һ��,�����ȡ���Ľ����"",������������"1",��͸
            ��.




            */





            if ( name == "opacity" && ret == "" )



            ret = "1";




            }





            /*





            * ��������������else
            if,��˵����ǰ�������IE,�Ǿ�ʹ��IE���еķ�������ȡ������ʽ.



            */





            else if ( elem.currentStyle ){





//camelCase��˵����"paddingTop"�ڶ�����������ĸ��д�ı�������д��ʽ 





//���´����ǽ��������Ƹ�д��camelCase����ʽ 





                var camelCase = name.replace(/\-(\w)/g, function(all,
                letter){





                return letter.toUpperCase();





                });





            // ʹ�ô��������������һ��,
            �������,��ʹ��camelCase�ı�������ʽ����һ��.





            ret = elem.currentStyle[ name ] || elem.currentStyle[
            camelCase ];






            // From the awesome hack by Dean Edwards





            //
            http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291






            /*





            * TODO:����if�еĴ���ȽϷ�����˼,��������Dean
            Edwards(ResigҲ��'��'����)��û��˵����ԭ��.



            * �ҷ����˺þö���������,ϣ������ָ��!



            */






            // If we're not dealing with a regular pixel number 





// but a number that has a weird ending, we need to 
convert it to pixels 





/* ֱ�ӷ���: 
�����ȡ���Ľ������һ��������pixelֵ(��,100,û��px��β)����һ�������
β������,����Ҫ���� 





* ת��Ϊ����pixels. 



*/ 





if (!/^\d+(px)?$/i.test( ret ) && /^\d/.test( ret )){ 


//������ʽ�Ͳ�������,д������������. 




// Remember the original values 





// 
��ʱ��style.left,runtimeStyle.lfet��ʽֵ��������,�Ȼ�ȡ����Ҫ��ֵ��ʱ
�������ȥ. 




var left = style.left, rsLeft = elem.runtimeStyle. 
left; 







/* 
��IE��,Ԫ�ص�runtimeStyle��style��������ͬ,�����ȼ�����. 




* 
��w3c��׼��document.defaultView.getOverrideStyle����֮���Ӧ�ķ���, 




* 
��������Gecko���ĵ��������û��ʵ�������׼,��������ζ�����ַ�������IE
��Ч. 




*/ 






// Put in the new values to get a computed value out 





elem.runtimeStyle.left = elem.currentStyle.left; 





style.left = ret || 0; 


//style�ں������ʼ�ж���:style = elem.style 




ret = style.pixelLeft + "px"; 




// Revert the changed values 





// �ָ�ԭ������ʽ 





style.left = left; 





elem.runtimeStyle.left = rsLeft; 





} 





} 






return ret; 
}, 


/** 



* ���elems��Number����,���������ַ�; 



* ���elems��XHTML�ַ���,����Щ�ַ����������DOM Element 
Ȼ�����ЩԪ�ش洢��ƥ��Ԫ�ؼ�������. 



* 
��jQuery����Ĺ��캯����,��������ַ�����HTML�ַ���ʱ,jQuery������ñ�
����������Щ�ַ���ת����ΪDOM Element. 




* 





* @param {string} elems -����һ���ַ���. 



* @param {HTML Element} context -
elem������������.�ڱ�������,���context����Ϊһ����elems�а�����ϵ��do 
cument. 



*/ 


clean: function( elems, context ){ 



var ret = []; 





context = context || document; 





// COMP: !context.createElement fails in IE with an error 
but returns typeof 'object' 





// 
���߱�����ʹ��'if(!context.createElement)'�������������'if',
            ������Ϊ��IE��������ʽ���ܴﵽĿ��, ����ʹ�����������





            // ���ʽ.




            if (typeof context.createElement == 'undefined')


            //���contextû��context.createElement����, �Ǳ�����context




            //������һ��ӵ��createElement��Ԫ��. ֮���Բ�ֱ����context����





            //document����Ϊ���ǵ�jQuery�Ķ��󲻽�����HTML, ����XML.




            context = context.ownerDocument || context[0] && context[
            0].ownerDocument || document;






            /* ��elems���ÿһ��Ԫ�ض�����һ�������������д���





            * ����������еĴ�����:



            * ������Ԫ����Number����,�������������ַ�.



            * ������Ԫ����XHTML string,
            �ǰ�string�е�">"��"<"֮����ı�ȥ��,Ȼ������dom���󲢻�ȡ���ڵ��ӽ�
            ������(childNodes),�����������װ��һ��



            * ���������



            *





            *





            * ��������������ܵ�ʵ��. ���������һЩ����û�н�����ϸ��.



            */





            jQuery.each(elems, function(i, elem){





                if (!elem )//���elem�ǿյ�,�ǾͲ��øɻ���. 




                return;






                if ( elem.constructor == Number )


//���������,��ͨ����''����'+'���㽫���ֱ�������ַ�. 




                elem += '';




// Convert html string into DOM nodes 





// ����:��HTML �ַ���ת����DOM�ڵ� 





                if ( typeof elem == "string" ){



// Fix "XHTML"-style tags in all browsers 





// 
                ����˵��: all -ƥ�䵽�������ַ��� ; front -
                match�ĵ�һ������'<��ǩ��';




// 


                tag -�ڶ�������(���������tag������)




                elem = elem.replace(/(<(\w+)[^>]*?)\/>/g, function(
                all, front, tag){





                return tag.match(
                /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?





                all :// 
                ����������г���tag(���Ƕ��ǵ���ǩ),ֱ�Ӱ�ƥ�䵽�ı�ǩ����





                front + "></" + tag + ">";


//��������������еĵ���ǩ,�Ͱ����Ǳ�ɿյ�˫��ǩ������ 





                });






            // Trim whitespace, otherwise indexOf won't work as 
expected 





var tags = jQuery.trim( elem ).toLowerCase(), 





div = context.createElement("div"); 



/* ���ڶ����ϵ����div����˵��: 




* 
���divֻ��һ����ʱ����������.Ŀ���ǵ��½����ʵ�html 
stringװ�����div����(ͨ��innerHTML����), 





* ����string���DOMԪ��.����ǽ�HTML 
stringת����ΪDOMԪ�رȽ����к�Ψһ������. 



*/ 







// ������wrap��˵��: 




// 
Ҫelem�ı�ǩ����һ��"���",��wrap��������"��ס"elem��html��ǩ 





// ���潫���tags�����Ƿ������оٵı�ǩ. 
����оͰ�wrap��ֵΪ��Ӧ��"���"��ǩ,����ʹ��. 




// �������㿴�����������˵��: 




// �����±�Ϊ0��Ԫ�ر�ʾ���"���"���м���, 
Ԫ��1��2��ʾ"���"�Ŀ�ʼ�ͽ�����ǩ 





// 
��ע�������'&&'��JavaScript�е�'����'(�μ�'attr'����������ע��.��ʾ,c
            trl + 'F',����'attr:') 




var wrap = 





// option or optgroup 





!tags.indexOf("<opt") && 



[ 1, "<select multiple='multiple'>", "</select>" 
] || 






!tags.indexOf("<leg") && 



[ 1, "<fieldset>", "</fieldset>" ] || 




tags.match(/^<(thead|tbody|tfoot|colg|cap)/) && 





[ 1, "<table>", "</table>" ] || 




!tags.indexOf("<tr") && 



[ 2, "<table><tbody>", "</tbody></table>" ] || 




// <thead> matched above 





(!tags.indexOf("<td") || !tags.indexOf("<th")) && 



[ 3, "<table><tbody><tr>", 


"</tr></tbody></table>" ] || 




!tags.indexOf("<col") && 



[ 2, "<table><tbody></tbody><colgroup>", 


"</colgroup></table>" ] || 




// IE can't serialize <link> and <script> tags
                normally





                jQuery.browser.msie &&





                [ 1, "div<div>", "</div>" ] ||




                [ 0, "", "" ];




                // Go to html and back, then peel off extra wrappers





                //
                �����"���"��elem������.ע��,ͨ��innerHTML������֮��,HTML
                string�Ѿ���Ϊ��ʵʵ���ڵ�DOMԪ��.




                div.innerHTML = wrap[1]+ elem + wrap[2];






                // Move to the right depth





                //
                ͨ��ѭ��,��divָ�򱻰�����elemԪ�ص���һ��.�ٸ���һ�������,�������
                �����HTML string�� '<option>linhuihua.com</option>'




                //
                ��ô����innerHTML֮��,div��DOM�����(ע��div��Ҳ�����ַ���,�˼�������
                һ������������DOMԪ��):




                /* <select>





                    *


                        <option>linhuihua.com</option>





                    * </select>



                * �����������whileѭ��֮��,


                'div'������ý���ָ��'select'��һ��





                */





                while ( wrap[0]--)





                div = div.lastChild;







                /*
                COMP:���������û��IE�����,��ô�������'if'�Ϳ���ʡ����...




                * �����´����ʱ��,��������ʡ����������'if':



                * ���������while����֮��, ����Ҫ����HTML
                string����Ӧ��DOMԪ��ֻҪ��div.childNodes�����Ԫ�����һ��



                *
                arrayȻ�󷵻ؼ���(childNodesֻ�����������,��û�������������㷨).
                �ܿ�ϧ����,IE���<table>Ԫ�����Զ�





                    *
                    ����<tbody>,�������ƻ���������ͼͨ��childNodes���������ҪԪ�ص�����.
                        �����дһ��if���������IE���������.




                        */





                        // Remove IE's autoinserted <tbody> from table
                            fragments





                            // IE����table ���Լ�����<tbody>, ����Ҫ����ȥ��





                                if ( jQuery.browser.msie ){






// String was a <table>, *may* have spurious 
                                    <tbody>





                                    var tbody =!tags.indexOf("<table") && tags. 
indexOf("<tbody")< 0 ? 



div.firstChild && div.firstChild.childNodes : 


//���û��table��ǩ����Ҳû��tbody��ǩ,�ͷ���div�µ������ӽڵ�,��tbody
װ�� 






// String was a bare <thead> or <tfoot> 





wrap[1] == "<table>" && tags.indexOf("<tbody" 
)< 0 ?//�����table��ǩ,������û��tbody��ǩ 





div.childNodes : 


//(true)�ͷ��ر�ǩ�µ�������Ԫ�� 





[];//(false)�ͷ���һ���յļ��� 






for ( var j = tbody.length -1; j >= 0 ; --j ) 





// ���tbody[j]��һ��tbody��ǩԪ�� 
&& ���tbodyԪ������Ԫ�� 





if ( jQuery.nodeName( tbody[ j ], "tbody" ) 
&& !tbody[ j ].childNodes.length ) 





tbody[ j ].parentNode.removeChild( tbody[ 
j ] );//���Լ���parent���Լ�ɾ���� 






// IE completely kills leading whitespace when 
innerHTML is used 





// COMP:��ʹ��innerHTML��Ԫ��ע��HTMLʱ, 
�����ЩHTML��һ��whitespace��ͷ(��ʼ),IE������whitespace��"kill"�� 





// ����ǲ��������������, 
����ǾͰ����whitespace���ȥ 





if ( /^\s/.test( elem )) 





div.insertBefore( context.createTextNode( 
elem.match(/^\s*/)[0] ), div.firstChild ); 






}









                                // ������IE���Լ���tbody��bug֮��,�Ϳ��԰ѽ��������





                                // ����childNodes������һ������������,
                                �����Ҫ����jQuery.makeArray������ת����Ϊһ������.��ϸ�μ�jQuery.make
                                Array




                                // ������ע��.




                                elem = jQuery.makeArray( div.childNodes );





                                }//end if( type of elem == "string")







                                //
                                ����󷵻�֮ǰ������ֽ��������û��Ԫ��,����elem�ֲ���(form����select
                                )




                                if ( elem.length === 0 && (!jQuery.nodeName( elem, "form"
                                ) && !jQuery.nodeName( elem, "select" )) )



                                return;//ʲôҲ������,����.
                                ���ð����Ԫ�ؼӵ����������






                                // �������������Ҫ��elem�ӵ����������





                                if ( elem[0] == undefined || jQuery.nodeName( elem,
                                "form" ) || elem.options )



                                ret.push( elem );





                                else





                                ret = jQuery.merge( ret, elem );






                                });// end jQuery.each();






                                return ret;
                                },

                                /**



                                * ��ȡ����������ֵ.û�д���value����Ϊ��ȡ����ֵ�Ĳ���



                                *





                                * @param {HTMLElement} elem



                                * @param {string} name



                                * @param {string} value



                                */


                                attr: function( elem, name, value ){



// don't set attributes on text and comment nodes 





                                    if (!elem || elem.nodeType == 3 || elem.nodeType == 8)





                                    return undefined;






                                    var notxml =!jQuery.isXMLDoc( elem ),





// Whether we are setting (or getting) 





                                set = value !== undefined,//������seting�ػ���getting 




                                    msie = jQuery.browser.msie;//�Ƿ���IE 





// Try to normalize/fix the name 





// һЩ����������Js�еı���������ԭ������������. 
                                    ��class,��JavaScript�о���className. ����Ҫ������������д���





                                    name = notxml && jQuery.props[ name ] || name;






// Only do all the following if this is a node (faster for 
                                    style)





// IE elem.getAttribute passes even for style 





// ����ֻ����tagName��Ԫ�ؽ������Եķ��ʻ������� 





                                    if ( elem.tagName ){








// These attributes require special treatment 





                                    var special = /href|src|style/.test( name );






// Safari mis-reports the default selected property of a 
                                    hidden option





// Accessing the parent's selectedIndex property fixes it 





// COMP:����Safari��һ��bug 




                                    if ( name == "selected" && jQuery.browser.safari )



                                    elem.parentNode.selectedIndex;






// If applicable, access the attribute via the DOM 0 way 





// ���elem����������name��ָʾ������ && 
                                    elem����XML���ͽڵ� && ����Ҫ����Դ�������(href/src/style)




                                    if ( name in elem && notxml && !special ){





                                    if ( set ){





// We can't allow the type property to be 
                                    changed (since it causes problems in IE)





// 
                                    ��IE�в��ܸı�inputԪ�ص�type���ԣ���Ȼ�ͻ�����ӡ�����ֻҪ���޸�input
                                    ��type���ԵĲ���������һ��Exception��





                                    if ( name == "type" && jQuery.nodeName( elem,
                                    "input" ) && elem.parentNode )



                                    throw "type property can't be changed";




// ����, �������������� 





                                    elem[ name ]= value;





                                    }






                                // browsers index elements by id/name on forms, give
                                priority to attributes.





                                // ������֮��Ҫ�����óɹ����ֵ����






                                // �����elem��һ��form && elem���������





                                if( jQuery.nodeName( elem, "form" ) && elem.
                                getAttributeNode(name))





                                return elem.getAttributeNode( name ).nodeValue;


                                //����������Ե�ֵ






                                // �������е�����, ˵��Ԫ�ز���һ��formԪ��,
                                ��ֱ�ӾͰ�Ԫ�ص�ֵ����





                                return elem[ name ];





                                }






                                // ���������е�����, ˵�� elem ��û�� name
                                ��ָʾ�����Ի���name��һ����������(href/src/style)





                                // �����IE����� && ���� XML�ڵ� && name == "style"




                                if ( msie && notxml && name == "style" )



                                return jQuery.attr( elem.style, "cssText", value );




                                if ( set )





                                // convert the value to a string (all browsers do
                                this but IE) see #1070





                                // ���������һ����string��ֵ,
                                ��IE�����е���������ܺܺõع���.
                                ����Ϊ���ô�Ҷ��ܺܺõع���,ʹ��""+vlaue��value���һ��string




                                elem.setAttribute( name, "" + value );




                                /* set��ֵ֮���Ҫ�Ѹո����õ�ֵ���� */





                                // ��ȡIE��href/src/style������Ҫ�����ر���





                                var attr = msie && notxml && special





                                // Some attributes require a special call on IE





                                ? elem.getAttribute( name, 2 )//
                                getAttribute������˵ֻ��һ������. ��IE��������������.��Ȼ��"special
                                call on IE"




                                : elem.getAttribute( name );








                                // Non-existent attributes return null, we normalize to
                                undefined





                                // ������� undefined��˵����������ʧ����





                                return attr === null ? undefined : attr;





                                }






                                // elem is actually elem.style ... set the style





                                // ǰ����һ�д���: " jQuery.attr( elem.style, "cssText",
                                value ); " ,���µĴ�����Ǵ��������������






                                // IE uses filters for opacity





                                // �����IE��opacity�˾�





                                if ( msie && name == "opacity" ){



                                    if ( set ){





// IE has trouble with opacity if it does not have 
                                    layout





// Force it by setting the zoom level 





                                    /* 





                                     * ԭ�ķ���: 
                                     ���Ԫ��û��layout,��ôIE�ڴ���opacity��ʱ��ͻ��������.����zoomֵǿ
                                     ����ӵ��layout. 



                                     * 





                                     * һ�����˲�����ʲô��layout��: 



                                     * layout 
                                     ��IE���еĸ���.(��������,���layout�ǲ������Ժ�������Ǹ�layout.��֮,
                                     ����԰������������������Ϳ�����): 



                                     * �򵥵�˵, ��IE��,һ��Ԫ�����ӵ��layout, 
                                     ��ô���Ϳ��Կ����Լ�������Ԫ�صĳߴ��λ��.ע��,��������������в�û��
                                     һ��Ԫ��ӵ��layout 



                                     * �����ĸ���. layout�Ĵ����ǵ�ǰIE����Bug�ĸ�Դ. 
                                     ����layout�ĸ�������,����ġ���ͨCSS�����߼�Web��׼���������(CSS 
                                     Mastery Advanced 



                                     * Standards Solutions)һ��. 



                                     * 





                                     * 
                                     �����zoom������Mirosoft���е�����,ͨ��������������ʹһ��Ԫ�ؾ���layou 

                                     t. 



                                     */





                                    elem.zoom = 1;






// Set the alpha filter to set the opacity 





                                    elem.filter =(elem.filter || "").replace(
                                    /alpha\([^)]*\)/, "" )+



                                    (parseInt( value )+ '' == "NaN" ? "" :
                                    "alpha(opacity=" + value * 100 + ")");



                                    }








                                /* set��֮��,�ͰѸո�set��ֵ����.
                                ֱ�ӻ�ȡ����ֵ,Ҳ��ִ������Ĵ��� */






                                return elem.filter && elem.filter.indexOf("opacity=") >=
                                0 ?





                                (parseFloat( elem.filter.match(/opacity=([^)]*)/)[1]
                                )/ 100)+ '':



                                "";



                                }






                                // ���������е�����,˵������Ҫ���û��߻�ȡIE��opacity����.




                                // ����Ҫ���û��ȡ��ͨ��Style����.




                                //������ʽ��ߵ�ig�ĺ���: i -
                                ���Դ�Сд���� ; g -ƥ�����п��ܵ��Ӵ�,һ��Ҳ��Ҫ�Ź�





                                // ���������к�������˵��:
                                ����all -ƥ�䵽�������ַ��� ; ����letter -
                                ƥ�䵽���ַ�������ĸ����(��1������)




                                name = name.replace(/-([a-z])/ig, function(all, letter){





                                    return letter.toUpperCase();


//��ƥ�䵽���ַ���ɴ�д��,ʵ����������������Ч��:"margin-Top" -> 
                                    "marginTop"




                                    });






                                if ( set )





                                elem[ name ]= value;






                                return elem[ name ];
                                },
                                /**



                                * ��ͨ��trim����,��Java String��trim����������һ��:



                                * ���ַ���ͷβ��" "���ַ�ȥ��



                                *





                                * @param {string} text ��Ҫ������ַ���



                                */


                                trim: function( text ){



                                    return (text || "").replace( /^\s+|\s+$/g, "" );
                                    },

                                /**



                                * ��һ��Array��¡����һ������һ�µ�����



                                *
                                ע�����ֿ�¡�������������ϵĿ�¡.��Ϊ���Դ�����ڵ�Ԫ�������õĻ�,��Դ
                                �����϶��������ݵ��κ��޸Ķ��ᷴӳ��Ŀ��������.




                                * @param {Array} array Դ����.



                                */


                                makeArray: function( array ){



                                    var ret = [];






                                    if( array != null ){





                                    var i = array.length;





// the window, strings and functions also have 'length' 





// 
                                    jQuery����Resig(Ҳ������ʦ��..)����������һ����������:window,string,
                                    function����'length'����Ŷ.




// �������ЩԪ��,��ô�Ͱ���ЩԪ����Ϊ����ĵ�һ��Ԫ��. 




                                    if( i == null || array.split || array.setInterval ||
                                    array.call )





                                    ret[0]= array;





                                    else





                                    while( i )


//����ret[--i]���array[i]������Ŷ,��Ȼ�ͻ��������Խ�������. 




                                    ret[--i]= array[i];





                                    }





                                //��󷵻�����µ�����.




                                return ret;
                                },

                                /**



                                * ���һ��Ԫ���Ƿ����ṩ��array֮��.����Ԫ���������е��±�.



                                *





                                * @param {HTMLElement} elem



                                * @param {Array} array



                                */


                                inArray: function( elem, array ){



                                    for ( var i = 0, length = array.length; i < length; i++ )





// Use === because on IE, window == document 





// COMP:��IE�б��ʽ(window == document)����true...����ʹ��=== 




                                    if ( array[ i ] === elem )





                                    return i;






                                    return -1;
                                    },

                                /*



                                * ����������ƴ������(���ڶ�������ӵ���һ�������β����)



                                */


                                merge: function( first, second ){



// We have to loop this way because IE & Opera overwrite the 
                                    length





// expando of getElementsByTagName 





                                    var i = 0, elem, pos = first.length;






// Also, we need to make sure that the correct elements are 
                                    being returned





// (IE returns comment nodes in a '*' query) 





// ����:��һ��ʹ��'*'��ѡ������,IE�᷵��ע�ͽڵ�. 




                                    if ( jQuery.browser.msie ){





                                    while ( elem = second[ i++ ] )





                                    if ( elem.nodeType != 8 )//NodeType == 8 ��comment�ڵ� 





                                    first[ pos++ ] = elem;






                                    } else





                                while ( elem = second[ i++ ] )





                                first[ pos++ ] = elem;






                                return first;
                                },

                                /**



                                * ����һ�������в��ظ�������Ԫ��(��һ���µ�����װ�ŷ���)



                                *





                                * @param {Object} array



                                */


                                unique: function( array ){



                                    var ret = [], //����� 





                                    done = {};//����������¼ĳ��Ԫ���Ƿ񱻴����






                                try {






                                    for ( var i = 0, length = array.length; i < length; i++ )
                                    {





//ʹ��jQuery.data������ȡԪ�ص�id.��ʹԪ��û��id,jQuery����Ҳ��ΪԪ��
                                    �½�һ��id.




                                    var id = jQuery.data( array[ i ] );






//������id�ǵ�һ����,����done�����¼����,��ʾ�Ѿ������.Ȼ���Ԫ��
                                    �Ž�������еȴ�����.




                                    if (!done[ id ]){





                                    done[ id ]= true;





                                    ret.push( array[ i ] );





                                    }





                                }






                                } catch( e ){





//�����κ��쳣��ֱ�Ӱ�ԭ���鷵��. 




                                    ret = array;





                                    }






                                return ret;
                                },

                                /**



                                * ʹ�ù��˺�����������Ԫ�ء�



                                * �˺������ٴ�������������



                                * elems -����������



                                * callback -���˺���. ���˺������뷵�� true �Ա���Ԫ�ػ�
                                false ��ɾ��Ԫ�ء�



                                * inv -
                                ������������invert����˼,�����˵��߼����ڶ�������ָ���ĺ������߼��෴.



                                *
                                ��,�ڶ����������߼����Ϊѡ�����0��Ԫ��,��ô�����������Ϊtrue,��С
                                ��0��Ԫ��ѡ�����





                                *





                                * @param {Object} elems



                                * @param {Object} callback



                                * @param {Object} inv



                                */


                                grep: function( elems, callback, inv ){



                                    var ret = [];






// Go through the array, only saving the items 





// that pass the validator function 





                                    for ( var i = 0, length = elems.length; i < length; i++ )





                                    if (!inv != !callback( elems[ i ], i ))





                                    ret.push( elems[ i ] );






                                    return ret;
                                    },

                                /**



                                * �õڶ������� callback
                                �ṩ��ӳ�亯�������һ�������е�ÿһ��Ԫ��,


                                ����������һ���µ�����װ����������



                                *





                                * @param {Array} elems �������������



                                * @param {Function} callback ӳ�䴦����

                                */


                                map: function( elems, callback ){



                                    var ret = [];






// Go through the array, translating each of the items to 
                                    their



// new value (or values). 


// ����: ��������(Ҳ���������������), 
                                    �����е�ÿһ��Ԫ��ת��Ϊ����ֵ.


                                    for ( var i = 0, length = elems.length; i < length; i++ ) {



                                    var value = callback( elems[ i ], i );





// value���� null��˵������ɹ������������µ���������ȥ 



                                    if ( value != null )



                                    ret[ ret.length ]= value;



                                    }






                                //


                                ����һ���µ����飬��������е�ÿ��Ԫ�ض�����ԭ�������е�Ԫ�ؾ�callback

                                ��������



                                return ret.concat.apply( [], ret );


                                }



                                });









                                //���ǽ���ʹ��navigator.userAgent���жϵ�ǰ�û���������һ�������



                                var userAgent = navigator.userAgent.toLowerCase();






                                //Figure out what browser is being used



                                //COMP:userAgent����һ���ǿɿ���.


                                //������Ĵ������ʹ��userAgent���жϵ�ǰ�������.


                                //���������濴��һЩͦ��Ȥ�Ľ��:����д����IE��������opera�����,д��M
                                ozilla��Ҳ���п�����IE�����...


                                jQuery.browser ={


                                    version:(userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) ||
                                    [])[1],


                                    safari: /webkit/.test( userAgent ),


                                    opera: /opera/.test( userAgent ),


                                    msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),


                                    mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.
                                    test( userAgent )



                                    };



                                //float�����ʽ������IE���������ִ���׼������е�������Щ��һ��.


                                var styleFloat = jQuery.browser.msie ?


                                "styleFloat" ://�����IE�����


                                "cssFloat";//����������������






                                //ͨ��extend������jQuery�����ֿռ��������һЩ����:


                                //(1) boxModel:��ǰ������Ƿ�ʹ�ñ�׼�ĺ���ģ��.


                                //(2) props
                                :һЩ�������ʽ������JavaScript���ĳ��������Ľз�,Ŀ���ǲ���һЩJS����
                                �ı����ֳ�ͻ,��for,�������̿���



                                //���ԵĹؼ���,��ô��JavaScript�о�������htmlFor��������.


                                jQuery.extend({


// Check to see if the W3C box model is being used 


// 
                                    ����ie��һ��ʹ����w3c�ĺ���ģ��.�����ie,�Ǿ�Ҫ������û��ʹ��CSS1Compa
                                    t,����еĻ�,Ҳ��w3c�ĺ���ģ��.

                                    boxModel:!jQuery.browser.msie || document.compatMode ==


                                    "CSS1Compat",

                                    props:{



                                    "for": "htmlFor",



                                    "class": "className",



                                    "float": styleFloat,



                                    cssFloat: styleFloat,





                                    styleFloat: styleFloat,





                                    readonly: "readOnly",



                                    maxlength: "maxLength",



                                    cellspacing: "cellSpacing"
                                    }
                                });

                                /*
                                *


                                �������jQuery.each����,��������������г����ĸ�������.each�����ĵڶ�
                                ������(����һ������)�����ǽ���һ���İ�װ


                                *
                                ֮��,������'��'��ÿһ��jQuery������.��ÿһ��jQuery���󶼾�����Щ��װ��
                                ��.

                                * ���Կ���,���麯����DOM�����й�.����ϸ�����������������:
                                */
                                jQuery.each({
                                    parent: function(elem){return elem.parentNode;},
                                parents: function(elem){return jQuery.dir(elem,"parentNode");},
                                next: function(elem){return jQuery.nth(elem,2,"nextSibling");},
                                prev: function(elem){return jQuery.nth(elem,2,"previousSibling"


                                    );},
                                nextAll: function(elem){return jQuery.dir(elem,"nextSibling");},
                                prevAll: function(elem){return jQuery.dir(elem,"previousSibling"


                                    );},
                                siblings: function(elem){return jQuery.sibling(elem.parentNode.


                                    firstChild,elem);},
                                children: function(elem){return jQuery.sibling(elem.firstChild);},
                                contents: function(elem){return jQuery.nodeName(elem,"iframe")?


                                    elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(


                                    elem.childNodes);}
                                },
                                /*


                                each���������������г������з���.Ȼ��������ÿһ�������������º�����
                                �д���.�����������:

                                *
                                ��ÿһ��������װһ��,Ȼ�������װ����ķ���'��'��ÿһ��jQuery������.
                                ��ÿһ��jQuery���󶼾�����Щ��װ����.

                                */
                                function(name, fn){




//�����scope�еĴ�����,thisָ��ÿһ�������г��ĺ���,��'parent'.������

                                    ��Ĵ�����,function(selector)�ڵ�
//��thisָ����һ��jQuery����. 


                                    /* ���½����а�װfn�Ĺ���.ʵ����,��װ������Ϊ: 


                                     * (1) 
                                     ʹ��fn��jQuery������ƥ��Ԫ�ؼ����е�ÿһ��Ԫ�ؽ��д���.�����Ľ����
                                     һ�����鷵��. 



                                     * (2) ʹ��selector����(1)���õ�������й��� 



                                     * (3) ��(2)�����������滻��jQuery����ԭ��ƥ��Ԫ�ؼ���. 



                                     * �뿴���¾������,������һЩ����û���ᵽ��ϸ��. 



                                     */





                                    /* 
                                     �����������������ν�İ�װ������.�����װ������󽫳�ΪjQuery�����һ
                                     ������.������Ҫ��װparent����: 




                                     * 
                                     parent��������Ԫ�ص�parent.���������������װ֮��,���ܾͱ���˷���һ��
                                     ����,��������Ͼ���jQuery���� 





                                     * 
                                     ��ƥ��Ԫ�ؼ�����ÿһ��Ԫ�ص�parent����ɵ�����.���ڷ����������֮ǰ,��
                                     ��Ҫ����selector�Ĺ���. 




                                     */


                                    jQuery.fn[ name ]= function( selector ){



//����map����,��jQuery������ƥ��Ԫ�ؼ�����ÿһ��Ԫ�ض�����fn�Ĵ���,��
                                    ���Ľ����������,�ŵ�һ����





//���з��ظ�ret. 
                                    Ҳ��jQuery.map������ע���ܹ������������һ��...





                                    var ret = jQuery.map( this, fn );






//����fn�Ĵ���֮��,�����selector����ʹ��selector���й���. 




                                    if ( selector && typeof selector == "string" )



                                    /* 
                                     ���ù�jQueryģ��ĺ��ĺ���multiFilter��ret���й���.ע��,multiFilter��
                                     ����������.������ֻ�� 





                                     * 
                                     ����������������.�������õĽ�����������������ҵ���������Ϊfalse��һ��
                                     ��,��selector��������Ԫ�� 





                                     * 
                                     ȫ����Ҫ��������Ϊ���.������Բο�jQuery.multiFilter������ע��. 




                                     */





                                    ret = jQuery.multiFilter( selector, ret );






                                    /* ���ؽ��֮ǰ,��Ҫ���д���: 




                                     * (1) 
                                     ʹ��unique������ret���ظ���Ԫ��ȥ��.(�ο�jQuery.unique����) 



                                     * (2) 
                                     ��������Ŀ������Ҫ�ý�����滻jQuery�����ڵ�ƥ��Ԫ�ؼ���,Ҳ����������
                                     ���޸�ƥ��Ԫ�ؼ���,����Ҫ������ 



                                     * 
                                     ����һ��'�ָ���',�Ա�������Ҫ��ʱ�����jQuery.fn.end�������ָ�.(ͬʱ��
                                     �ο�jQuery.fn.pushStack) 




                                     */





                                    return this.pushStack( jQuery.unique( ret ) );
                                    };
                                });

                                /* ���µ�each���ø������Ǹ�each���õ�˼·һ��.
                                *

                                ����������ЩС�ı�.����������each������ԭ�к����Ļ���֮��������װ,��
                                ��Щ��װ��Ϊԭ�к�����'�����'.

                                *
                                ��ԭ����a.apppend(b)�ǰ�b׷�ӵ�a��childNodes��,������������append,����
                                ��һ��appendTo����,��


                                *


                                ����������a.appendTo(b),��ô���ǰ�a׷�ӵ�b��childNodes��.������������.
                                *
                                * ���Կ������麯����DOM�����й�.
                                */
                                jQuery.each({
                                    appendTo: "append",
                                    prependTo: "prepend",
                                    insertBefore: "before",
                                    insertAfter: "after",
                                    replaceAll: "replaceWith"
                                    },

                                //each������callback����(Ҳ���������������)�������Ե�����(name),�Լ�

                                ���Ե�ֵ(original)
                                //Ϊ���ø��õ�˵�������˼·,�ҽ��һ�������ֵ������.�ͼ������ǵ�ǰ��

                                �����appendTo(����ֵ��'append')
                                //��ôname����'appendTo',original����'append'.
                                function(name, original){



//�����name�����'appendTo',��ô���Ǿ����ڶ���һ��jQuery.fn.appendTo
                                    ����


                                    jQuery.fn[ name ]= function() {



//��¼�´���������������в���,���Ǽ���args��ֵ��['"<b>Hello</b>"'] 




                                    var args = arguments;






//ע��,�����scope(���÷�Χ)�ڵ�thisָ����һ��jQuery����. 





//each�����������,��Ȼ�������jQuery���������. 




//��each���״����������ʲô��?�������¿�: 




                                    return this.each(function(){






//ע��,�����scope(���÷�Χ)�ڵ�thisָ������,jQuery������ƥ��Ԫ�ؼ���
                                    �е�ÿһ��Ԫ��.





//�Դ������Ĳ������б���.ע�������Ѿ����������args == 
                                    ['"<b>Hello</b>"']




//�����еļ��������׽���������ʲô��˼:(ֻ��ѭ�����ڵĴ���) 




                                    /* 





                                     * jQuery('<b>Hello</b>')['append'](this); 



                                     */





//���Կ���,����ʹ��'<b>Hello</b>'�½���һ��jQuery����,Ȼ�����'ԭ����' 
                                    append����,��������





//ƥ��Ԫ�ؼ����е�Ԫ��this(ע�������this����jQuery�������һ����ͨ��D 
                                    OMԪ��)�ӽ�������childNodes��.




                                    for ( var i = 0, length = args.length; i < length; i++ )





                                    jQuery( args[ i ] )[ original ]( this );





                                    });
                                };


                                });






                                /*
                                *


                                ����each�����������each������Ŀ��Ҳ�Ǵ�ͬС��:�����з�����ΪjQuery��

                                ��ķ���.
                                *
                                * ���麯���󲿷���Ԫ�ص������Լ���ʽ�й�.
                                */
                                jQuery.each({
                                /**


                                 *
                                 ���jQuery������ƥ��Ԫ�ؼ�����ÿһ��Ԫ���ϵ�name��ָ��������ֵ������.




                                 *





                                 * @param {string} name ��������



                                */


                                removeAttr: function( name ){




//ע��,�������this���õ���ƥ��Ԫ�ؼ����е�ÿһ��Ԫ��(��һ����һ��DOM
                                    Ԫ��).��jQuery����Ҫ�����֪��





//this�����õĶ�����ʲô��������,�������ڸ�each����'��'��һ���ʱ��.��
                                    ������ı�jQuery��this���Ϳ��,




//��ô�ҽ������ȿ���each������ע��. 





//Ϊ�˱���remove��һ��������������,�������д������Ƚ�name��ָ��������
                                    ��Ϊ"",������������û��name��ָ��





//������,����������������.Ȼ�����removeAttribute��ɾ��������. 





                                    jQuery.attr( this, name, "" );




                                    if (this.nodeType == 1/* Node.ELEMENT_NODE */)





                                    this.removeAttribute( name );
                                    },
                                /**



                                *
                                ΪԪ�����һ������.��������Ԫ��ԭ�е�����������Ͽո�,Ȼ������µ�����
                                .




                                *
                                ���Կ���,�����ڲ�������jQeury.className�����ռ��ڵ�add�����������.jQu
                                ery.className�ڵĺ���ֻ���ڲ�





                                * ʹ�õ�,�������⹫��.���Բο�jQuery.className������ע��.



                                *





                                * @param {string} classNames



                                */


                                addClass: function( classNames ){



//this���õ���һ����ͨ��DOMElementԪ��.����jQuery����. 




                                    jQuery.className.add( this, classNames );
                                    },
                                /**



                                * ΪԪ���Ƴ�classNames��ָ��������.����˵��ͬaddClass����.


                                *
                                * @param {string} classNames �ַ���,����"class1 class2 class3".
                                */
                                removeClass: function( classNames ) {
//this���õ���һ����ͨ��DOMElementԪ��.����jQuery����. 
                                    jQuery.className.remove( this, classNames );
                                    },

                                /**
                                * ��������.
                                *
                                ��ʵ���úܼ�:���Ԫ����classNamesָ����������ȥ���������,���û����
                                ��������������������.
                                * ����˵����ͬ��addClass.
                                *
                                * @param {Object} classNames
                                */
                                toggleClass: function( classNames ) {
//this���õ���һ����ͨ��DOMElementԪ��.����jQuery����. 
                                    jQuery.className[ jQuery.className.has( this, classNames ) ?
                                        "remove" : "add" ]( this, classNames );
                                    },

                                /**
                                *
                                �޲ε��������ƥ��Ԫ�ؼ����е�ÿһ��Ԫ�ش�����parentNode���Ƴ�(remove)
                                ����.
                                * �вεĻ�,��ô��ֻ��selector��ָ����Ԫ���Ƴ�.
                                *
                                * @param {Object} selector
                                */
                                remove: function( selector ) {

//this���õ���һ����ͨ��DOMElementԪ��.����jQuery����. 

                                    /* ����������ͻ�ִ�������if���: 
                                     * (1) û�д���selector. 
                                     jQuery�Ὣ���������Ĭ��Ϊ'*',��ѡ�����е�Ԫ��. 
                                     * (2) 
                                     �д���selector,�������selecotr������ѡ���κε�Ԫ��.����������е�r. 
                                     length == 0 
                                     * 
                                     * 
                                     ע��,jQuery.filter����������һ������,������һ����Ϊr������.�������װ
                                     �ŵľ���filterִ�к�Ľ����. 
                                     * 
                                     ����һ������.���ͨ����ѯ������ϵ�length���Ծ��ܹ��ж�selector������
                                     û��ѡ��Ԫ��.������ο� 
                                     * jQuery.filter������ע��. 
                                     */
                                    if ( !selector || jQuery.filter( selector, [ this ] ).r.
                                    length ) {

// Prevent memory leaks 
// 
                                    ����:��ֹ�ڴ�й©.�������д����Ŀ������ɾ���ڵ�֮ǰ���ڵ��Ӧ������'
                                    ����'ɾ����.��Щ����Ԫ�ص��¼� 
// 

                                    �������������������.��������������,��ô�����п��ܵ����ڴ�й©.




                                    jQuery( "*", this ).add(this).each(function(){// 


                                    <-��this�����к���ڵ��½�һ��jQuery����





                                    //
                                    Ȼ����add�������Լ�Ҳ�ӽ����jQuery�����





                                    //
                                    ƥ��Ԫ�ؼ�����.���ͶԼ����е�����Ԫ�ض�





                                    //
                                    �Ƴ��¼��������ͻ�������.




                                    jQuery.event.remove(this);





                                    jQuery.removeData(this);





                                    });






                                //��Ԫ�ص�˫�׽ڵ�ɾ��Ԫ���Լ�...




                                if (this.parentNode)





                                this.parentNode.removeChild( this );





                                }
                                },

                                /**



                                * ɾ��ƥ��Ԫ�ؼ��������е��ӽڵ㡣



                                */


                                empty: function() {




//ע��,this���õ���һ����ͨ��DOMElementԪ��.����jQuery����. 





// Remove element nodes and prevent memory leaks 





// 
                                    ��ʵ��������ӽڵ����������˵,�������Ǹ�whileѭ���Ѿ�������.��������r
                                    emove��������һЩ��ֹ�ڴ�й©��





// 
                                    ��ʩ.��������while֮ǰ����remove������һ��.�ٵ���whileѭ�����ƺ�.(���
                                    ��jQuery.remove������ע��)




                                    jQuery( ">*", this ).remove();


//">*"����˼��˵,this�µ����к���ڵ�. 





// Remove any remaining nodes 





                                    while ( this.firstChild )





                                    this.removeChild( this.firstChild );
                                    }
                                },
                                //�������each�����õ�callback����.��������ÿһ��������װһ��,Ȼ�����

                                ��'��'��ÿһ��jQuery������.����'��װ'������
                                //��ʲô,�������������:
                                function(name, fn){
                                    jQuery.fn[ name ]= function(){


//����each������ƥ��Ԫ�ؼ����е�ÿһ��Ԫ���϶�����һ���Ǹ�����(��fn). 




                                        return this.each( fn, arguments );






//������ǲ�����each������,����ο�jQuery.each����������ע��. 

                                    };
                                });


                                /**
                                * ΪjQuery���������������:width������height����.
                                * ���Ƿֱ�������ȡ/����jQuery������ƥ��Ԫ�ؼ����еĿ�Ⱥ͸߶�.


                                *


                                *
                                ע��,ƥ��Ԫ�ؼ����ڵ�Ԫ�ش󲿷����������ͨ��HTMLElementԪ��,����Ҳ��
                                ������window������document����


                                *
                                Ҫ�����������,��֮����Ҫ������Ǵ�������window����document�ϵĲ�����
                                ����.�Ӷ�ʹ�ñ������Ե���Щ����.

                                */
                                jQuery.each([ "Height", "Width" ], function(i, name){
                                    var type = name.toLowerCase();//���Сд 

//ΪjQuery�������width��height����. 
                                    jQuery.fn[ type ]= function( size ){




// 
                                    ������������õ���Ƕ�׵�?:�����,����ҪС�������ĸ�':'�������Ǹ�'?'��.





// 
                                    COMP:������,��ͬ�����֮����ڴ��ں��ĵ���С�ļ���������Ľ���ȽϾ���
                                    ,ֵ��ѧϰ!




// 
                                    ͬʱҲֵ��ע��,���������ڻ�ȡwindow��width/heightʱ,ʵ���ϻ�ȡ���ǿͻ�
                                    ���Ĵ�С.Ҳ��������˵��





// '�ӿ�'�Ĵ�С,���������������򴰿ڵĴ�С. 





// Get window width or height 





                                    return this[0] == window ?





// Opera reports document.body.client[Width/Height] 
                                    properly in both quirks and standards





                                    jQuery.browser.opera && document.body[ "client" + name ]
                                    ||






// Safari reports inner[Width/Height] just fine (Mozilla 
                                    and Opera include scroll bar widths)





                                    jQuery.browser.safari && window[ "inner" + name ] ||




// Everyone else use document.documentElement or 
                                    document.body depending on Quirks vs Standards mode





                                    /* ��ѧʱ��: 




                                     * 
                                     ʵ����,�������д�����Ҫ������IE�����.��IE���ģʽ�»�����IE�ı�׼ģʽ
                                     ���ӿڵĴ�С��Դ�ǲ�ͬ��.�� 





                                     * 
                                     û��DOCTYPE������ҳ����,�ӿڴ�С(clientWidth/clientHeight)��doucment.b 
                                     ody��.��������DOCTYPE 




                                     * 
                                     ����֮��,���Ǿ���document.doucmentElement����.ʵ����,w3c���ӿڴ�С����
                                     �ƶ�ΪinnerWidth/Height 




                                     * 
                                     ��IE�Լ�Opera�����������ΪclientWidth/Height.Ϊ��ӭ��IEϵ�Ŀ�����,Fir 
                                     efox���������ʵ���� 





                                     * documentElement.��ʹ�÷���Ҳ��һ����. 



                                     */





                                    document.compatMode == "CSS1Compat" && document.
                                    documentElement[ "client" + name ] || document.body[ "client" + name
                                    ]:






// Get document width or height 



                                    this[0] == document ?



// Either scroll[Width/Height] or 
                                    offset[Width/Height], whichever is greater



                                    Math.max(


                                    /* ����������ڶԴ�scrollWidth/scrollHeight 
                                     offsetWidth/offsetHeight�ϱ������� 





                                     * TODO:�����ȼ�ס���´�����һ�ֽ��������... 

                                     */





                                    Math.max(document.body["scroll" + name], document
                                    .documentElement["scroll" + name]),



                                    Math.max(document.body["offset" + name], document
                                    .documentElement["offset" + name])



                                    ):






// Get or set width or height on the element 


// ����:��ȡ/����Ԫ�ص� 
                                    width/height


                                    size == undefined ?


//���û�и���������ֵ��,�Ǿͱ�ʾҪ��ȡֵ,�����������ֵ 



// Get width or height on the element 


// ����:��ȡԪ�ص�width/height 


                                    (this.length ? jQuery.css( this[0], type ): null
                                    ):








// Set the width or height on the element 
                                    (default to pixels if value is unitless)


// ����:����Ԫ�ص�width ���� 
                                    height(���û�д���λ,ȱʡʹ��px)

// 
                                    ע��,���������jQuery�����css����������jQuery.css����.jQuery.css����

                                    ֻ����������Ԫ��


// 
                                    ����ʽֵ,�ǲ�������������ʽֵ��.�������this.css��һ��jQeury����ʵ����

                                    ����.�������ǲ�һ����


// 
                                    �����ο�jQuery.fn.css������jQuery.fn.attr����������ע��.


                                    this.css( type, size.constructor == String ? size
                                    : size + "px" );


                                    };



                                });






                                // Helper function used by the dimensions and offset modules



                                // ����:�ڳߴ�ģ���offsetģ����õ��ĸ�������.


                                // ע��, "dimensions and offset
                                modules"��jQueryԴ�����е����һ��ģ��.


                                // ������ʹ��jQuery.curCSS��������ȡԪ��ĳ����ʽ��ֵ(���ֲ���).


                                function num(elem, prop){


                                    return elem[0] && parseInt( jQuery.curCSS(elem[0], prop, true),
                                    ) || 0;



                                    }






                                //COMP:



                                //COMP:TODO:Safari������.

                                var chars = jQuery.browser.safari && parseInt(jQuery.browser.version)
                                    < 417 ?





                                    "(?:[\\w*_-]|\\\\.)" :



                                    "(?:[\\w\u0128-\uFFFF*_-]|\\\\.)",


                                    quickChild = new RegExp("^>\\s*(" + chars + "+)"),


                                    quickID = new RegExp("^(" + chars + "+)(#)(" + chars + "+)"),


                                    quickClass = new RegExp("^([#.]?)(" + chars + "*)");

                                    /**
                                    *
                                    ���ｫͨ��extned����,��չjQuery�Ĺ���.��Щ������Ҫ��������ʽ,������
                                    �й�.�����漰������ʽ,��������Ƚϳ���.
                                    */
                                    jQuery.extend({
                                    /**
                                     * һ������:����":last" ������α��ѡ������������ѡ�������?
                                     * �������� jQuery.expr �����ڵĺ�������������.
                                     *
                                     *
                                     ԭ�������ǵı��ʽ���ս��ᱻjQuery.filter�������յ�,Ȼ����filter����ͨ
                                     ��������ʽ(parse�����ڵ�������ʽ. parse����?����һ�°�)
                                     *
                                     ��ѡ�����еķ��ź����Ʋ��ֽ�ȡ����(��':last'�ķ��Ų��־���':',���Ʋ���
                                     *
                                     ����'last').�鿴�����Լ�������ʲô,Ȼ��Ժ������ҵ���Ӧ�ĺ������д���.
                                     �����ǵ�':last'�ͻ�
                                     *
                                     ��jQuery.expr[':']['last']�������д���.����':first'������.jQuery.expr[
                                     ':'].first�������д���.
                                     *
                                     *
                                     ����Կ���,��Щ������û����ʲô,ֻ�Ǹ����Լ�������,�������Ĳ����ж�
                                     ����.ʵ����,��Щ������󽫻ᴫ��jQuery.grep
                                     *
                                     ��������Ϊ��(jQuery.grep)��һ�����˺���ʹ��.��������г�������һ���ĺ�
                                     ��(��first)����false,��˼���Ǹ���grep
                                     *
                                     ������ǰ��������Ԫ�ز����Ϲ��˵�Ҫ��,��ǰԪ�ز���������Ľ����.��
                                     ������true,��˵����ǰԪ�ط��Ϲ��˵�����,��
                                     * �԰����������Ľ����.
                                     *
                                     *
                                     ���ע��,jQuery.grep������һ���������͵Ĳ���(����������),������������
                                     ���˺�������true��falseʱ�ľ��庬��.
                                     *
                                     ture��Ҫ�������Ԫ����,���ǲ�Ҫ?�ⶼ�������������������.Ĭ�������(��
                                     �����������ʱ)������������˵�Ĺ����߼�
                                     * ��false��Ҫ,true����.
                                     *
                                     * �����ٲ鿴jQuery.filter����֮ǰ,�鿴jQuery.grep����������ע��.
                                     */
                                        expr: {
                                        "" : function(a,i,m){return m[2]=="*"||jQuery.nodeName(a,m[2
                                        ]);},
                                    "#" : function(a,i,m){return a.getAttribute("id")==m[2];},
                                    ":" : {
                                        /* 
                                         ':'�����ռ��µ�������Щ���������ÿ��Բ������jQuery����Api�ĵ�: 
                                         * 
                                         http://jquery-api-zh-cn.googlecode.com/svn/trunk/index.html��'ѡ����'
                                         ���� 
                                         * 
                                         * ��������Ͳ�copy��,��ô��������˵Щ�м��������ġ��� 
                                         * 

                                         ������Щ������ʲô����¡���α�ʹ�õ���?���¾ٸ�����˵��: 
                                         * 
                                         ������ʹ��$('p:first')����һ��jQuery�����ʱ��,':first'�������������: 
                                         * 
                                         jQuery����������'p'ѡ���document�е�����p���뵽ƥ��Ԫ�ؼ�����ȥ.Ȼ��
                                         ����jQuery.fn.find 
                                         * 
                                         �������й���.find�����ֵ���jQuery.grep����(����һ����̬����)���й���,j 
                                         Query.grep�����ֵ��� 
                                         * 
                                         jQuery.find(����һ����̬����)���й���,jQuery.find�����ֵ���filter����
                                         ���й���.��ʱ��, 
                                         * 
                                         jQuery.filter�����ʹ�selector�н�ȡ��':first'(ע��,selector�Ǳ�һ��һ
                                         �㴫������).jQuery.filter 
                                         * 
                                         �������Ⱦ���':'��'first'��jQuery.expr�в��Һ��ʵĹ��˺���,���,���ҵ�
                                         ��jQuery.expr[':'].first 
                                         * 
                                         ��ôjQuery.filter���Ͱ������������jQuery.grep�����Ĺ���,���õ�
                                         ���˵Ľ����. 
                                         * 
                                         * 
                                         �ǲ��Ǹо��ܸ���?�������Ϊ���������Ҫ,�����������Ҫ֪��jQuery.filte 
                                         r��jQuery.grep 
                                         * ������ѡ����ɸѡ���洦�ں��ĵ�λ�Ϳ�����. 
                                         * 
                                         * 
                                         ���Ҫע��,��Щ����ÿ�������ĺ���:a��ʾ��ǰ�����ƥ��Ԫ�ؼ����е��Ǹ�
                                         Ԫ��;i��ʾ���Ԫ����ƥ��Ԫ�ؼ� 
                                         * 
                                         ���е�����,m������jQuery.filter�����ж�ѡ������������ƥ��Ľ����,����
                                         һ������.�����jQuery.filter 
                                         * ����. 
                                         */
// Position Checks 
                                        lt: function(a,i,m){return i<m[3]-0;},
                                    gt: function(a,i,m){return i>m[3]-0;},
                                    nth: function(a,i,m){return m[3]-0==i;},
                                    eq: function(a,i,m){return m[3]-0==i;},
                                    first: function(a,i){return i==0;},
                                    last: function(a,i,m,r){return i==r.length-1;},
                                    even: function(a,i){return i%2==0;},
                                    odd: function(a,i){return i%2;},

                                    // Child Checks
                                    "first-child": function(a){return a.parentNode.
                                        getElementsByTagName("*")[0]==a;},
                                    "last-child": function(a){return jQuery.nth(a.parentNode. 
lastChild,1,"previousSibling")==a;}, 
"only-child": function(a){return !jQuery.nth(a.parentNode 
.lastChild,2,"previousSibling");}, 

// Parent Checks 
parent : function(a){return a.firstChild;}, 
empty : function(a){return !a.firstChild;}, 

// Text Check 




contains: function(a,i,m){return (a.textContent||a. 


innerText||jQuery(a).text()||"").indexOf(m[3])>=0;}, 




// Visibility 





visible: function(a){return "hidden"!=a.type&&jQuery.css( 
a,"display")!="none"&&jQuery.css(a,"visibility")!="hidden";}, 



hidden: function(a){return "hidden"==a.type||jQuery.css(a 


,"display")=="none"||jQuery.css(a,"visibility")=="hidden";}, 




// Form attributes 





enabled: function(a){return !a.disabled;}, 





disabled: function(a){return a.disabled;}, 





checked: function(a){return a.checked;}, 





selected: function(a){return a.selected||jQuery.attr(a, 


"selected");}, 




// Form elements 





text: function(a){return "text"==a.type;}, 



radio: function(a){return "radio"==a.type;}, 



checkbox: function(a){return "checkbox"==a.type;}, 



file: function(a){return "file"==a.type;}, 



password: function(a){return "password"==a.type;}, 



submit: function(a){return "submit"==a.type;}, 



image: function(a){return "image"==a.type;}, 



reset: function(a){return "reset"==a.type;}, 



button: function(a){return "button"==a.type||jQuery. 
nodeName(a,"button");}, 



input: function(a){return /input|select|textarea|button/i 
.test(a.nodeName);}, 






// :has() 





has: function(a,i,m){return jQuery.find(m[3],a).length;}, 






// :header 





header: function(a){return /h\d/i.test(a.nodeName);}, 






// :animated 





animated: function(a){return jQuery.grep(jQuery.timers, 
function(fn){return a==fn.elem;}).length;} 





} 
}, 

// The regular expressions that power the parsing engine 
// ����:�ý�����������ޱ�������������ʽ 
// 

��Щ������ʽ��filter�����б�ʹ��.������filter������ѡ�������ᾭ����

Щ������ʽ�Ĳ���. 
// ���忴jQuery.filter����. 
parse:[ 


// Match: [@value='test'], [@foo] 





/^(\[) *@?([\w-]+) *([!*$^~=]*) *('?"?)(.*?)\4 *\]/,






                                    // Match: :contains('foo') 





/^(:)([\w-]+)\("?'?(.*?(\(.*?\))?[^(]*?)"?'?\)/,






                                    // Match: :even, :last-child, #id, .class





                                    new RegExp("^([:.#]*)(" + chars + "+)")
                                    ],



                                    //"
                                    /**



                                    *
                                    һ���ܹ�������ѡ�����Ĺ�����.���Կ���multifilter��ʵ�ǵ���jQuery.fil
                                    ter������ʵ�ֹ��ܵ�.��'������ 





* ѡ����'��ʵ���Ƕ�ε���filter����.



                                    *





                                    * ʲô�Ƕ��ѡ����?��"form > input, 
#id"�ھ�������������,����֮����','����.



                                    *





                                    * expr ѡ����,�ַ���.



                                    * elems ��ѡ���������õķ�Χ.Ҳ����ͨ����˵��'������'.



                                    * not
                                    һ������,��ʾ�Ƿ���"��ģʽ".������'���˵�(��ģʽ)'����'����ʣ'��?��
                                    ����not������.notΪtrue��ʾ,ѡ����t��ָ��



                                    *
                                    ��Ԫ��ȫ���ӹ��˽����ȥ��.��notΪfalse���߲�����ʱ,���ʾѡ����t��ָ
                                    ����Ԫ��ȫ���ӽ��������.




                                    */


                                    multiFilter: function( expr, elems, not ){



                                        var old,


//������װ��������������ʽ.����expr�������while�л᲻�ϵر�while��
                                        ��,old��������¼expr




//����һ���޸�ǰǰ��״̬.��ͨ�� expr == 
                                        old���ж�expr�Ƿ��޸Ĺ�.




                                        cur = [];//��ǰ�������˵Ľ����. 





//ѭ����������expr != 
                                        old��Ϊ��Ӧ��exprû�б�ƥ�䵽�����.���������֮��,while�Ͳ���ͣ��





                                        while ( expr && expr != old ){





                                        old = expr;


//���浱ǰexpr��ֵ,�ȵ���һ��ѭ��ʱ����expr��û�б��ı�. 




//����jQuery.filter���������Ĺ���.�����jQuery.filter�����ķ���ֵ����
                                        ˵��:




//f��һ������,������������,�ֱ���r��t��r�ǹ��˺�Ľ������,��t���Ǿ��� 
                                        filter��ȡ֮���expr.




//�����ǽ�'form > input, 
                                        #id'����jQuery.filter����.��������֮��,����ַ���������',#id'�����
                                        ��





//һ�������t���Ե���,Ȼ��������󱻷��ز���f������.�������ڵ�f.t����' 
                                        ,#id'��. 




                                        var f = jQuery.filter( expr, elems, not );





//��f.t��λ���ַ���ǰ�˵�','ȥ��.���',#id'��','ȥ���ͳ�Ϊ��'#id'. 




                                        expr = f.t.replace(/^\s*,\s*/, "" );




                                        cur = not ? // 
                                        �Ƿ��п���'��ģʽ'?����оͰ�f.r����elems������һ�ι��˵�������.������
                                        һ�ι��˵��Ľ��





                                        elems = f.r : //���ٹ��˵������ѡ������ָ����Ԫ��. 




                                        jQuery.merge( cur, f.r );


//���û�п���'��ģʽ',��ô�Ͱ����й��������˵Ľ����ͳͳ�ϲ���һ��. 





// 


                                        ������jQuery.filter��һ�غϵĴ���,expr�ᱻ�����Ѿ�ƥ�����һ����ѡ����
                                        ��.




// 
                                        ���������֮��expr��û�п�,֤�����л��,��Ҫ����ƥ��,����ѭ���ͼ���,һ
                                        ֱ��expr���˻���expr==oldΪֹ.




                                        }






                                    return cur;//���ѽ��������.
                                    },

                                    /**


                                    * ��context����Ѱt��ָ������Ԫ��,�����������һ�������з���.



                                    *





                                    * @param {string} t -ѡ����



                                    * @param {Object} context -
                                    ѡ��������ѡ����������������.���Կ������û�д���,��������document.



                                    */


                                    find: function( t, context ){



// Quickly handle non-string expressions 





// ���ѡ��������string,�Ǿ�ֱ�Ӱ�tװ��һ�������з���. 




                                        if ( typeof t != "string" )



                                        return [ t ];






// check to make sure context is a DOM element or a document 





// 
                                        ��֤context������һ��DOMԪ��(HTMLElement����HTMLDocument),���������,
                                        �Ǿͷ���һ���ռ���.




                                        if ( context && context.nodeType != 1/* Node.ELEMENT_NODE */
                                        && context.nodeType != 9/* Node.DOCUMENT_NODE */)





                                        return [ ];






// Set the correct context (if none is provided) 





// ���������contextΪdocumentԪ��: �д���context��Ȼ��, 
                                        û�Ļ�����contextΪdocument




                                        context = context || document;






// Initialize the search 





// ��ʼ����Ѱ 





                                        var ret =[context], //���յĽ���� 





                                        done = [],





                                        last, //����������ע�����н���. 




                                        nodeName;


//������װ������t��ƥ������ĺ���ڵ�Ľڵ���������. 





// Continue while a selector expression exists, and while 





// we're no longer looping upon ourselves 





                                        /* �����µ�whileѭ����,�����t(�����, 
                                         t��ѡ�����ַ���)���вü�.ÿ����һ��ѭ��,t���п��ܱ��ü�һ��. 




                                         * 
                                         �������һ��ѭ����������t�Ѿ���''����t������ѭ����ʼǰ��һ����(last 
                                         != t),��ôѭ������ֹ. 




                                         * ���whileѭ����Ŀ�����ڱ���t�ڵ�����ѡ����. 



                                         */





                                        while ( t && last != t ){





                                        var r = [];//������ϳ�ʼ��Ϊ�ռ���. 




                                        last = t;


//��last���浱ǰ��t������,��Ϊ�ڵ��µĴ�����t�����ݺܿ��ܱ�����.����
                                        ����ͨ���Ա�tǰ����������ж�t�Ƿ�õ�ƥ��.





                                        t = jQuery.trim(t);//ȥ��t��ͷ�ո� 






                                        var foundToken = false,


//һ����־,�����������������Ƿ��Ѿ������. 





// An attempt at speeding up child selectors that 





// point to a specific element tag 





// 
                                        ԭ�ķ���:�ӿ�ָ���ض���ǩ����ѡ�������ٶ�...(�е㲻֪����,�ǰ�...��,
                                        �������¿�)




                                        re = quickChild,


//quickChild���������ʽ�Ѿ��������������ģ�鿪ʼ��ʱ���Ѿ�����.��
                                        ��ʹ��Ctrl+F����ȥ����





//����'> 
                                        span'������ѡ�����ͽ���quickChild. 





                                        m = re.exec(t);


//��t�в��ҷ���re���������ʽ���������ִ�, 
                                        ����ƥ��Ľ��װ��һ�����鷵�ظ�m






//��� exec ����û���ҵ�ƥ�䣬�������� 
                                        null��������ҵ�ƥ�䣬�� exec ��������һ�����飬���Ҹ���ȫ�� RegExp
                                        ��������ԣ���





//��ӳƥ�����������0Ԫ�ذ�����������ƥ�䣬����1��nԪ���а�������ƥ
                                        ���г��ֵ�����һ����ƥ�䡣���±�1��n��ʾ������ʽ�ķ����





//����㻹����̫���,��,�������¿�. 





// �����ƥ����ִ�,˵��t������"> p 
                                        span"�����,�Ǿ����ȴ�context��childNodes������,������û�з���Ҫ�����
                                        �ڵ�





                                        if ( m ){





// 
                                        m[1]��ʾ��һ������(quickChild�ĵ�һ������),���tΪ"form > 
                                        input",��ôm[0] == "> input", m[1] == "input" 




                                        nodeName = m[1].toUpperCase();






// Perform our own iteration and filter 






//��������forѭ���Ǳ���context��childNodes, 
                                        ��ÿһ��tagName��nodeName�ļӽ��������.���nodeName��*,�ǾͰ����е�ch
                                        ildNodes�ӽ����





//���� 






//ע��,ret�Ѿ���ʼ��Ϊret[context] 




                                        for ( var i = 0; ret[i]; i++ )





                                        for ( var c = ret[i].firstChild; c; c = c.
                                        nextSibling )





// nodeName = m[1] 





                                        if ( c.nodeType == 1/* Node.ELEMENT_NODE */
                                        && (nodeName == "*" || c.nodeName.toUpperCase() == nodeName))



                                        r.push( c );//�ѽڵ�ӽ������ 






                                        ret = r;





                                        t = t.replace( re, "" );


//��ƥ����ַ�ȥ��,˵�����ƥ���Ѿ���� 






//��������t(����,����һ��selector)�����ǲ��ǻ��пո�, 
                                        �����,˵���ǻû����,t����Ȼ��ѡ����. �Ǽ������ҵ��ļ�





//��������"���ӵĶ���",����ѭ�� 





                                        if ( t.indexOf(" ") == 0 ) continue;



                                        foundToken = true;//��һ���Ǻ�.˵�����������. 




                                        }//end
                                    if.�������if���ж�t���ǲ��Ƿ���quickChild���ַ�ģʽ.






                                    // else��˵,
                                    t���ѡ�������沢û��quickChildģʽ���ִ�,��û������"> input"�����Ĵ�





                                    else {





//��������һ��������ʽ 





                                        re = /^([>+~])\s*(\w*)/i;






// �����tƥ��Ļ�...(��t��ֵΪ:"> input" ���� "+ 
                                        input" �ֻ��� "~ input") 




                                        if ((m = re.exec(t)) != null ){





                                        r = [];//������ϳ�ʼ��Ϊ�ռ���. 





                                        var merge = {};





                                    nodeName = m[2].toUpperCase();


                                    //ע�Ⱑ,������ķ���2����nodeName!�����quickChild��һ����.




                                    m = m[1];// m[1]�ľ���">" "+" "~" �е�һ��






                                    //ע��,forѭ���е�ret����ʼ��Ϊ[context].���for����˼���������е�cont
                                    ext�в���t��ָ������Ԫ��.




                                    for ( var j = 0, rl = ret.length; j < rl; j++ ) {





// m�����"~"��"+"�е�һ��, ����n = 
                                        ret[j].nextSibling




// ����(m == ">"), ����n = ret[j].firstChild 




// 
                                        ������Ϊ'>'��ʾ����һ�ָ��ӵĹ�ϵ,��'~'��'+'���ʾһ���ֵܵĹ�ϵ.����
                                        �ο���ƪ�����ĵ�:




//http://jquery-api-zh-cn.googlecode.com/svn/trunk/index.html 
                                        ��'ѡ����'->'�㼶'




                                        var n = m == "~" || m == "+" ? ret[j].
                                        nextSibling : ret[j].firstChild;







                                        for (; n; n = n.nextSibling )





                                        if ( n.nodeType == 1/* Node.ELEMENT_NODE 


                                         */ ){//ֻ��Ԫ�ؽڵ����Ȥ 



                                        var id = jQuery.data(n);


//jQuery.data����ԭ���������ǻ�ȡ��������ڵ��ϵ�����. 




//���ǵ�����ֻ�����һ��Ԫ�ظ�����ʱ��,��ֻ����Ԫ����ȫ�����ݻ�������
                                        �Ļ�����id.




//���id��jQueryȫ��ͬһ����,���һ��Ԫ�ز�û��id��ʱ��,jQuery.data��
                                        ����





//����һ��.�����ȡ���id������Ϊ��Ҫ��һ���Ǻ�,��ֹ�ظ��ϲ�ͬһ��Ԫ��
                                        ����





//����ο�jQuery.data 







//merge��ʼ��һ���ն��� 





                                        if ( m == "~" && merge[id])



                                        break;


//���m=="~"��Ҫѡ�����е�siblings && 
                                        ����ڵ�(n)�Ѿ��������˽����,��������ѭ��








//���û��ָ��nodeName(�Ǿ���˵����ʲôԪ��,ͳͳ��Ҫ��)����n��nodeName
                                        ����ָ��nodeName,�ǾͰ�Ԫ�ؼӽ������





                                        if (!nodeName || n.nodeName.
                                        toUpperCase() == nodeName ){





                                        if ( m == "~" ) merge[id]= true;


//�����Ǻ�,˵�����Ԫ���Ѿ����ӽ��������. 




                                        r.push( n );//��Ԫ�ؼӽ������ 





                                        }






                                    if ( m == "+" ) break;


                                    //���m=="+",ֻҪһ���͹���.��'label + 
input'�ͱ�ʾ������label���Ǹ�input





                                    //���⻹��Ҫע��,����һ��ѭ����,���ܻ���Ԫ��Ҫ�ӽ��������.��Ϊ'������ 
label���� 





//��input'������ָ��һ��Ψһ��Ԫ��.




                                    }





                                    }//end for






                                    ret = r;//��r�еĽ������ret,ret�����Ľ����.





                                    // And remove the token





                                    t = jQuery.trim( t.replace( re, "" ) );


                                    //��ƥ����ַ���ȥ��,˵�����ƥ���Ѿ����





                                    foundToken = true;


                                    //�����Ǻ�,˵���������ջ��,ѡ����ƥ�䵽��Ԫ��.




                                    }





                                    }






                                    /*
                                    ����Ĵ���Ŀ�����뿴��t�Ƿ�ƥ��quickChild��ģʽ.������ĵ�һ��if���Ǽ�
                                    ��ƥ��Ľ��.��������if�ڵĴ����ܹ�ִ��





                                    *
                                    �����t������quickChild�������������ַ���ģʽ.��ô���Ǿͻ����������ַ�
                                    ģʽȥ����ƥ����.������ۿ�...




                                    */






                                    // See if there's still an expression, and that we 
haven't already





                                    // matched a token





                                    // t�����ǲ��ǻ���selector &&
                                    ��û�ҵ����ʵ�Ԫ��?(!foundToken)





                                    if ( t && !foundToken ){






// Handle multiple expressions 





// 
                                        ������ڵ�t���治����",",˵��t��һ��������ѡ����.ע��','�������ָ����


                                        ѡ������.��'#id1,#id2'��������ѡ����.




                                        if (!t.indexOf(",")){



// Clean the result set 





//���ret[0]����context,˵��ǰ��Ĳ�����û���ҵ����ʵ�Ԫ��,��context�� 
                                        "��"����,���ret




                                        if ( context == ret[0]) ret.shift();






// Merge the result sets 





                                        done = jQuery.merge( done, ret );


//done�������Ҫ���صĽ������.��ret,r������ʱ�Ľ����. 





// Reset the context 





                                        r = ret =[context];






// Touch up the selector string 





                                        t = " " + t.substr(1,t.length);




                                        }






                                    //
                                    ������ڵ�t���溬��",",˵��t��һ��'����ѡ����(multiSelector)',��t�ڻ�
                                    �ж��ѡ����(����֮����','����)




                                    else {





// Optimize for the case nodeName#idName 





                                        var re2 = quickID;


//quickID���������ʽ��������nodeName#idName�������ַ���ģʽ 





                                        var m = re2.exec(t);


//��ƥ��Ľ��װ��һ������,Ȼ�󷵻ظ�m 





// Re-organize the results, so that they're 
                                        consistent





// 
                                        ������֯һ��ƥ��Ľ��,��ô����Ϊ�˺�����Ĵ�����һ��:m[1]Ӧ����һ��
                                        ����,��m[2]���Ƿ��ŵ��ұߵ�����





                                        if ( m ){





                                        m =[ 0, m[2], m[3], m[1] ];





                                        }





                                    // ���t�����ܵõ�ƥ��,
                                    �����ڵ����t�ڿ����Ǻ��д�ͳ��id��class(��'#id','.className'),��quick 
Class 




// 
����ʽȥ����ƥ����.ע���quickClass������'ƭ'��.ͨ���鿴���Ĵ������
�������,quickClass��ƥ��id,��ƥ��className 




else { 





// Otherwise, do a traditional filter check 
for 





// ID, class, and element selectors 





re2 = quickClass; 


//quickClass������ʽ������������"#id",".className"�������ַ���ģʽ 





m = re2.exec(t); 


//����t��ģʽ,Ȼ���ƥ��Ľ���ŵ��ŵ�һ����������,Ȼ�󷵻ظ�m 




} 






// ��id��������class���ڵ�"\"ȥ�� 





m[2]= m[2].replace(/\\/g, ""); 






var elem = ret[ret.length-1]; 






// Try to do a global search by ID, where we can 





// 
���m[1]��'#',�����ǾͿ�����ǰ���ĵ��ǲ���xml�ĵ�.�������xml�ĵ�,����
                                    elem����getElementById,




                                    //
                                    �Ǿͱ���elem����һ��HTMLDocumentԪ��.ע��,getElementById����������XML
                                    �ĵ�����.




                                    if ( m[1] == "#" && elem && elem.getElementById
                                    && !jQuery.isXMLDoc(elem)){





// Optimization for HTML document case 





// 
                                        ���������е�����,˵��elem��һ��HTMLDocumentԪ��.ֱ��ʹ������getElmentB
                                        yId����,m[2]��ƥ�䵽��id��





                                        var oid = elem.getElementById(m[2]);






// Do a quick check for the existence of the 
                                        actual ID attribute





// to avoid selecting by the name attribute 
                                        in IE





// also check to insure id is a string to 
                                        avoid selecting an element with the name of 'id' inside a form





                                        /* 
                                         COMP:��IE��getElementById���ܻ��nameΪͬ��ֵ��Ԫ�ظ�ѡ�����,��: 




                                         * <form> 



                                         * 


                                         <input name="goodInput"></input> 





                                         * </form> 



                                         * 
                                         ������ʹ��document.getElmentById('goodInput')��ʱ��,�ͻ�������input
                                         ѡ�����. 




                                         * 
                                         ����Ϊ�˱���������������Ǵ���������,��������Ҫ���һ�µ�ǰ������ǲ�
                                         ��IE����Opera(���Ƕ����������),Ȼ���ٿ������ǵ�id 




                                         * 
                                         �����ǲ���������Ҫ���Ǹ�id.�������,��ô���ô��� 
                                         Query('[@id="'+m[2]+'"]',elem)[0] �����һ��������,idΪ������ָ 





                                         * ����ֵ��Ԫ��,Ȼ����oidָ�����Ԫ��. 



                                         */





                                        if ((jQuery.browser.msie||jQuery.browser.
                                        opera) && oid && typeof oid.id == "string" && oid.id != m[2])



                                        oid = jQuery('[@id="'+m[2]+'"]', elem)[0];





// Do a quick check for node name (where 
                                        applicable) so





// that div#foo searches will be really fast 





                                        /* 
                                         �������ע���н���,��'div#foo'�������ַ���ģʽ��quickIDƥ��֮��,����
                                         ���鱻���浽��m��.Ȼ�����m������һ��СС�� 





                                         * 
                                         ����֮��,m�ڵ�Ԫ��˳�����˸ı�.��'div#foo'Ϊ��,���ʱ��m[1]=='#',m[2 
                                         ]=='foo',m[3]=='div',�������߲Ż�˵ 





                                         * "Do a quick check for node name...". 



                                         * 
                                         ����m[3]nodeName�Ĳ���,֤ʵoid��ȷ����m[3]��ָ����nodeName,�ǾͰ�oidװ
                                         �������в���Ϊ�������.���oid������û�� 





                                         * m[3]��ָ����nodeName,�򷵻�һ���յ�����. 



                                         */





                                        ret = r = oid && (!m[3] || jQuery.nodeName(
                                        oid, m[3])) ? [oid] : [];





                                        }





                                    //������������������





                                    else {





// We need to find all descendant elements 





// ����:������Ҫ�ҳ����еĺ��Ԫ�� 





// 
                                        ��һ��forѭ��,������ʼ��ʱװ��ret��������Ԫ��.Ҳ����˵,�������ǲ���Ҫ
                                        �ҳ����еĺ��Ԫ����?�ǵ���Ҫ�ҳ�˭�ĺ����?




// �𰸾���,���Ƕ���ret��. 




                                        for ( var i = 0; ret[i]; i++ ) {





// Grab the tag name being searched for 





                                        var tag = m[1] == "#" && m[3]? m[3]: m[


                                        1] != "" || m[0] == "" ? "*" : m[2];




// Handle IE7 being really dumb about 
                                        <object>s





                                        // COMP:TODO:��IE
                                        7��,quickID���������ʽ�ƺ����ܹ���ȷ�ع�����<object>Ԫ����.




                                        //
                                        tag��ƥ���������'*',�ǲ���һ����һ�������Ľ��.�п�����IE7��<object
                                        >bug�����





                                        //
                                        ��������if������Ҫ����IE7����'object'���������.





                                        if ( tag == "*" && ret[i].nodeName.
                                        toLowerCase() == "object" )



                                        tag = "param";




                                        /*
                                        getElementByTagName�Ƕ�����HTMLElement�ӿ��з���.���е�DOMԪ�ض�ʵ����
                                        ����ӿ�





                                        *
                                        ���Կ���,���´���ʹ��getElementByTagNameȡ��ret�е�i��������Ԫ�ص�����
                                        ����ڵ�,Ȼ�����Щ�������r��.




                                        */





                                        r = jQuery.merge( r, ret[i].
                                        getElementsByTagName( tag ));





                                        }






                                    // It's faster to filter by class and be 
done with it 





// ����������һ����ѡ����. 




if ( m[1] == "." ) 





//������ѡ����ר�õ�filter����.���Ĳ�������˼��˵,��r�й���ʣ�¾���m[2 
]��ָ����������Ԫ�� 





r = jQuery.classFilter( r, m[2] ); 






// Same with ID filtering 





// IDѡ���� 





if ( m[1] == "#" ){ 





var tmp = []; 






// Try to find the element with the ID 





// 
ֻҪһ�ҵ�ӵ��ָ��id��Ԫ�ؾͿ���ֹͣ����,�����ؽ����. 





for ( var i = 0; r[i]; i++ ) 





if ( r[i].getAttribute("id") == m[2] 
){ 





tmp =[ r[i] ]; 





break; 





} 






r = tmp; 





} 





ret = r; 





}//endl else 






t = t.replace( re2, "" ); 


//��ɶ�re2��ƥ��,���Խ�����t��ȡ������. 




}//end else. 





} 






// 
����������ô���Ĺ���֮��(ÿ�ι��˶��Ὣt�ڵ�ƥ���ַ�����Ϊ""),t����
�����д���selector,˵������'quickXXXX'��ѡ���� 





// 
��������������.�Ǿ͵��������,��ԭʼjQuery.filter������������,��Ϊ����
�������κκϷ���ʽ��ѡ����. 





// If a selector string still exists 





if ( t ){ 





// Attempt to filter it 





var val = jQuery.filter(t,r); 


//t��ѡ����,r��ѡ���������õ�������,Ҳ��t�����÷�Χ. 




ret = r = val.r;//val.r��filter���˺�Ľ��. 




t = jQuery.trim(val.t); 


//val.t���Ǿ���filter�����,�ü�����ѡ����. 




} 






}//end while 






// An error occurred with the selector; 





// just return an empty set instead 





// 
�������һ�����Ϸ���ѡ����,��t��ֵ����������ֵ.��ô�������е�����t����
���ܻ�����ֵ��.�������쳣�����֮��,���Ƿ���һ���յ�������Ϊ��Ӧ. 




if ( t ) 





ret = []; 






// Remove the root context 





// �Ƴ���Ԫ�� 





if ( ret && context == ret[0]) 





ret.shift(); 






// And combine the results 





done = jQuery.merge( done, ret ); 


//done�������Ҫ���صĽ����.��ret��һ����ʱ�Ľ������. 





return done; 
}, 

/** 



* ��r�й��˵�className������Ҫ���Ԫ�� 



* r -һ��result set, 


����������������ڹ���ʣ���߹��˵���mѡ����ָ����Ԫ�� 
* m -����һ��style����. 
* not -��Ҫ���˵�,���ǹ���ʣ��?�����������Ϊһ������ 
*/ 
classFilter: function(r,m,not){ 
// 
��m��ָ�����������������߸����һ���ո�,��Ϊ�˷�ֹm��ָ��������������
���������������,��: 
// 
'className'�ͻᱻ'theclassName'����,�Ӷ������˵���ʹ��indexOf�����ж�
��ʧ��. 
m = " " + m + " "; 
var tmp = []; 
//������r�е�ÿһ��Ԫ��,�������Ƿ���m��ָ��������. 
for ( var i = 0; r[i]; i++ ) { 
var pass = (" " + r[i].className + " ").indexOf( m ) >= 0; 
if ( !not && pass || not && !pass ) 
//������ʽ̫������,û�а취����������,Ҳ�ܼ�... 
tmp.push( r[i] ); 
} 
return tmp;//���ع��˺�Ľ��. 
}, 

/** 
* 
��rָ����Ԫ������,���˳�t��ָ����Ԫ��(t��selector,һ��Ϊstring����) 
* 
* t -ѡ���� 
* r -ѡ����ִ�е�������.��ѡ����Ҫ��r��ָ����Ԫ�ط�Χ�� 
* not -
һ������,��ʾ�Ƿ���"��ģʽ".��'���˵�'����'����ʣ'��?�ⶼ��not������ 
.notΪtrue��ʾ,ѡ����t��ָ�� 
* 
��Ԫ��ȫ���ӹ��˽����ȥ��.��notΪfalse���߲�����ʱ,���ʾѡ����t��ָ
����Ԫ��ȫ���ӽ��������. 
* 
*/ 
filter: function(t,r,not) { 
var last; 

// Look for common filter expressions 
/* t�Ǵ�������һ���ַ���,����һ��ѡ����,����:'selector1
                                    .selector2 :selector3'.(ע������ַ�������3�� 
* ѡ����)��������Ҫ�𲽽�ȡ��ÿһ��ѡ����. 
��'selector1'ƥ��Ľ��������'.selector2'����.һֱ��ôѭ�� 
* ��ȥ.while������whileѭ������ִ�������Ĺ���. 
* 
* 
������˵һ��whileѭ����ѭ�������е�last.������˼��'��һ��ѭ����ʼʱʹ
                                    �õ�selector'.����while��ÿһ 
* 
��ѭ���ж����ѡ����t���н�ȡ,����ÿһ��ѭ����t����Ӧ�ø�ԭ����һ��.��
������ѭ��֮��ѡ����t���Ǳ���ԭ�� 
* �� t == last,˵��t�Ѿ������ٱ���ȡ�����д�����. 
*/ 
while ( t && t != last ) { 
last = t; 
//��¼���������seletor������,�����´�ѭ����������ʱ�򿴿�t��û�б� 


��. 





var p = jQuery.parse, m; 


//m���»�����װ������ʽ�ڵ�ƥ����. 





//p��һ������,����װ������������ʽ, 
����ƥ�������������ִ�����: 





//����һ: [@value='test'], [@foo] 




//���ζ�: :contains('foo') 




//������: :even, :last-child, #id, .class 





//ע��, p��Ҫ���״�ƥ����Ӵ� 






//����������������,����t�ǵ��е���һ��.�ҳ�֮��,��ƥ��Ľ������m��,
�����㴦��,��������ʹ��. 




for ( var i = 0; p[i]; i++ ) { 





m = p[i].exec( t ); 






if ( m ){ 


//���m����ֵ��,˵��t����Ȼ����Ҫ�����ѡ����. 





// Remove what we just matched 





// ԭ�ķ���: �Ѹղŵ�ƥ����ִ���t�и�ȥ�� 





t = t.substring( m[0].length ); 






m[2]= m[2].replace(/\\/g, ""); 


//���Ƿ��ź���ַ���,����ƥ����ִ�Ϊ":even",��m[1] == ":" ; m[2] == 
"even" 




break;//�ҵ���t������һ�����,�Ǿ͸Ͽ�����for�� 





} 





} 






//���t�����Ͳ�ƥ��, �Ǿ���������whileѭ��,�������� 





if (!m ) 





break; 







// ����,�ҵ�t�������������. 
��ô�����������ÿһ��������д��� 





// ����һ������if / else if /else ���Ƿ�������д��� 






// :not() is a special case that can be optimized by 





// keeping it out of the expression list 





// ԭ�ķ���: :not() ��һ����������. 
�����ŵ����ʽ֮�����ʹ���õ��Ż� 





/* ��һ��������'ʲô��ʺ����...',��˵��һ�°�: 




* 
���ѡ��������':not'��˵������������ѡ����(��m[3])��ƥ���Ԫ�شӽ��
���й��˳�ȥ.����Ŀ����ͨ 





* ���ݹ����filter�������������������(true)�ﵽ��. 



*/ 





if ( m[1] == ":" && m[2] == "not" ) 





// optimize if only one selector found (most common 
case) 





r = isSimple.test( m[3])? // isSimple = 
/^.[^:#\[\.]*$/ , ����: 
m[3]��:not('inner_selector')�ڵ�inner_selector 




jQuery.filter(m[3], r, true).r :// 


�������simple��ѡ����(��":" ��":" 
��"."�ȿ�ͷ��ѡ����),�Ǿͽ��ظ�����������,ͬʱ������������ 





// һ�����:not 
= true. �����ʾҪ��ƥ���Ԫ�ؽ����޳��Ĳ��� 





jQuery( r ).not( m[3] ); // 
�������simple��ѡ��������˵��ֻһ��ѡ����,�Ǿ�ʹ�ø���"רҵ"��not����
��������. 





// We can get a big speed boost by filtering by class here 





// ԭ�ķ���: ʹ��class�����˵Ļ�����ʹ�ٶȵõ��ܴ������ 





else if ( m[1] == "." ) 


//�����ʹ����������,�͵���classFilter������ 





r = jQuery.classFilter(r, m[2], not); 


//not��һ�����ص�����,Ϊtureʱ,Ҫ��Ԫ�ز�Ҫ,��Ҫ��Ԫ�ط���Ҫ... 





else if ( m[1] == "[" ){ 





var tmp = [], type = m[3];//m[3]��������һ��ֵ: 

������ƥ���ַ���Ϊ"[att $= value]", ��ôm[1]=="[" ; m[2]=="attr" ; 
m[3]=="$=" 





//����: 
r�Ǵ�����������һ������.���Կ�������ǩ��(����ͷ�Ķ���) 





for ( var i = 0, rl = r.length; i < rl; i++ ) { 





var a = r[i], 





z = a[ jQuery.props[m[2]] || m[2] ]; 


//props����ȷ��m[2]��ָ������������JS������Ч��,��domԪ������class�� 





//JavaScript��Ӧ�ñ���ΪclassName 




//��ôz����a��ָ��Ԫ�ص�����ֵ 






//�������ֵ�ǿյĻ���
����������href/src/selected,���Ҫ���������ֵ"����"һ�� 





//ΪʲôҪ����һ����? ��Ϊ��������a[ 
jQuery.props[m[2]] || m[2] 
]���ص�ֵz��null,˵��ʹ�ÿ�ݷ�ʽ����ȡ����ֵʧ����,�Ǿ�ʹ�ø� 





//��"רҵ"�Ļ�ȡ����:attr 




//���ԵĻ�ȡ�ڲ�ͬ��������»���һЩbug,�����Ҫattr������.������opaci 
ty����������,��IE����filter������,����w3c������������� 





//style.opacity������.��Щ������,������Ҫattr�������. 




//�������֮��,ֱ�ӻ�ȡ����ʧ�ܶ�����Ϊ��������Щ����. 




if ( z == null || /href|src|selected/.test(m[2]) ) 





z = jQuery.attr(a,m[2]) || ''; 




//��ȡ��������ֵ֮��,��������ѡ����Ҫ������Щʲô.����type��֪��(m[5]
��ƥ�䵽������ֵ,m[4]����ס�������ֵ�ĵ����Ż���˫����) 




// 





//"= value"����value 




//"!= vlaue"������value 




//"^= value"��value��ͷ 





//"$= value"��value��β 





//"*= value"����value 




if ((type == "" && !!z || 


//���z����ֵ��(����undefined����null),��!!z ����true,����Ϊfalse 




type == "=" && z == m[5] || 



type == "!=" && z != m[5] || 



type == "^=" && z && !z.indexOf(m[5]) || 
//!���� === false 




type == "$=" && z.substr(z.length -m[5]. 
length) == m[5] || 





(type == "*=" || type == "~=") && z.indexOf( 
m[5]) >= 0)^ not ) //TODO: not���п����ǽ�����ȡ��,������Resig˵�� 





//һ�����߶��selector 




tmp.push( a ); 





} 






r = tmp; 






// We can get a speed boost by handling nth-child here 





} 








//����API�ĵ�������: 




//ƥ���丸Ԫ���µĵ�N���ӻ���żԪ�� 





//':eq(index)'
                                    ֻƥ��һ��Ԫ�أ��������Ϊÿһ����Ԫ��ƥ����Ԫ�ء�:nth-child��1��ʼ��
                                    ����:eq()�Ǵ�0����ģ�





                                    //����ʹ��:




                                    //nth-child(even)





                                    //:nth-child(odd)





                                    //:nth-child(3n)





                                    //:nth-child(2)





                                    //:nth-child(3n+1)





                                    //:nth-child(3n+2)





                                    else if ( m[1] == ":" && m[2] == "nth-child" ){ 





var merge = {}, tmp = [], 





// parse equations like 'even', 'odd', '5', 
'2n', '3n+2', '4n-1', '-n+6' 





test = /(-?)(\d*)n((?:\+|-)?\d*)/.exec( 





m[3] == "even" && "2n" || 


//" &&
                                    "��JS�в�������˵��:���λ�ȡÿһ����������������ת��Ϊ������





                                    m[3] == "odd" && "2n+1" ||


                                    //���������false����ֱ�ӷ��������������ֵ
                                    ��ע�⣬���ص���ת��ǰ��ԭֵ����һ��





                                    !/\D/.test(m[3]) && "0n+" + m[3] ||


                                    //�ǲ������ͣ����жϺ���������Ĵ����������������һ�������������ֱ
                                    �����һ����������





                                    m[3]),


                                    //Ȼ��Ӧ��������true���򷵻���������������ֵ






                                    // calculate the numbers (first)n+(last)
                                    including if they are negative





                                    // ���m[3]=="-2n+1",��test[1]=="-" ;
                                    test[2]=="2" ; test[3]=="+1"




                                    // ����������㽫�ϱ߷����������ַ���ת����������





                                    first =(test[1]+(test[2] || 1)) -0, last =
                                    test[3]-0;








                                    //��ȡ���Ҫ�Ĳ���֮��,�����Ҫ������Щ����������(����)�����Ԫ����






                                    // loop through all the elements left in the jQuery
                                    object





                                    //��������������������������Ԫ��,�����Ƿ��������





                                    for ( var i = 0, rl = r.length; i < rl; i++ ) {





                                            var node = r[i], parentNode = node.parentNode, id
                                            = jQuery.data(parentNode);





//merge������¼�Ѿ��������Ԫ��. 




//���id��ָʾ��parentNode��û�б������,�ǾͶ����parent��ÿһ������
                                            ����"�ղ�",������ÿ��һ��"��ͥ���"




//ΪʲôҪ"�ղ�"parent�ĺ�����? 




//��Ϊnth-child�Ĳ��������þ���"ƥ���丸Ԫ���µĵ�N���ӻ���żԪ��" 




//��ʵ "�ղ�" 
                                            ��Ŀ�Ĳ��������еĺ���,������֪��node�����parent�ĺ������ŵڼ�





                                            if (!merge[id]){





                                            var c = 1;






                                            for ( var n = parentNode.firstChild; n; n = n
                                            .nextSibling )





                                            if ( n.nodeType == 1 )





                                            n.nodeIndex = c++;






                                            merge[id]= true;


//���parent�ĺ����Ѿ�"�ղ�"����,��¼���� 





                                            }






                                        var add = false;






                                        //"�ղ�"���֮��,���parent��ÿ�����Ӷ��õ���һ�����,�����Ҫ�������
���,��������,�����Ƿ��һ�����Ӽ����������� 






//first==0, ˵��Ҫ�ľ��ǵ�last������ 





if ( first == 0 ){ 





if ( node.nodeIndex == last ) 





add = true; 





} 






//��������һ�����.�����ѧһ�����Һ�,�����ҾͲ���˵��. 




//�����Ϊ�˱�֤nodeIndex��last����� 





else if ((node.nodeIndex -last)% first == 0 && 
(node.nodeIndex -last)/ first >= 0 ) 





add = true; 






if ( add ^ not )//add��not�������. 
not��һ�����ص�����,Ϊtureʱ,Ҫ��Ԫ�ز�Ҫ,��Ҫ��Ԫ�ط���Ҫ... 




tmp.push( node ); 





}//end for 






r = tmp; 









} 






// Otherwise, find the expression to execute 





//t������Ҫƥ������ֻ������,�Ǿͷŵ����else���洦�� 





else { 






//expr��һ������,���������кö�ĺ���,ʹ��m[1]�趨��ֵ��������Щ���� 





var fn = jQuery.expr[ m[1] ]; 






//���m[1]==":",��ôfn����һ������,��������������һ�ѵļ򵥺���,ʹ��
                                        m[2]�ٴ���������Щ����





                                        if ( typeof fn == "object" )



                                        fn = fn[ m[2] ];





                                        //������������ַ�������ʽ����,��ôʹ��eval������ʹ����





                                        if ( typeof fn == "string" )



                                        fn = eval("false||function(a,i){return " + fn + 


                                            ";}"); 




// Execute it against the current filter 





// ʹ��һ����������������Ԫ��. 




// ���Կ�����������������ʹ����fn���������Ĺ���. 




// ���fn����true,���Ԫ������ 





// ���fn����false,���޳�Ԫ��. 




// 
ע��,��Щ'ture����falseȥ��'�Ĺ����߼�������һ�ɲ����,��jQuery.grep��
���ĵ���������Ϊtrue 




// ʱ,�����߼�����'tureȥ��false����'�� 





r = jQuery.grep( r, function(elem, i){ 





return fn(elem, i, m, r); 


//elem���ǵ�ǰ�����ƥ��Ԫ�ؼ����е�Ԫ��,i����������.m��һ�� 





//����,��װ�ŶԴ����ѡ����(t)��������ƥ���Ľ��.r�Ǿ�grep 




//������ĵ�ǰ�����.ֻ��jQuery.expr[':'].last����ʹ����������� 






}, not ); 


//not���Ϊture��ת���������Ĺ����߼�:���˺���ԭ����ЩҪ��Ԫ�ؾͲ�Ҫ 
,��Ҫ��Ԫ�ؾ�Ҫ... 




} 






//����������, 
���t�ﻹ�б��ʽ,�Ǿ��ڽ���һ��ѭ��.��˷���... 






}//end while 






// Return an array of filtered elements (r) 





// and the modified expression string (t) 





// ԭ�ķ���: �����˵õ��Ľ����(r)���޸Ĺ��ı��ʽ(t)���� 





return { r: r, t: t }; 
}, 

/** 



* ��elemΪ���,����dir��ָ����·�߷���ָ����Ԫ��. 



* �е��ɬ,���ܲ�̫�����,�Ҿٸ�����: 



* 


��elem��һ����ͨ��DOMԪ��,��dir��'parentNode',��ôdir�����ͻ᷵��[elem 
.parentNode,elem.parentNode.parentNode...]. 
* 
�ֱ���,elem��һ����ͨ��DOMԪ��,dir����'nextSibling',��ôdir�ͻ᷵��[el 
em.nextSibling,elem.nextSibling.nextSibling...]. 
* 
ע��,����һ��һ��ķ��ز���û�����Ƶ�,��Ҫ�����Ԫ��Ϊdocumentʱ,����
ֹͣ. 
* 
* @param {HTMLElement} elem 
һ����ͨ��DOMԪ��.ʵ�����������Ͳ�������HTMLElement,XML��DOM����Ҳ���� 
. 
* @param {string} dir 
�ַ���,'parentNode','nextSibling','previousSibling'������һ. 
*/ 
dir: function( elem, dir ){ 
var matched = [],//����� 
cur = elem[dir];//��ʼ��curΪelem[dir] 
while ( cur && cur != document ) { 
if ( cur.nodeType == 1/* Node.ELEMENT_NODE */ ) 
matched.push( cur ); 
cur = cur[dir];//curָ����һ��Ŀ��. 
} 
return matched; 
}, 

/** 
* 
* 
��curָ����Ԫ��Ϊ���,һֱ����'cur[dir];cur=cur[dir]',ֱ�����õĴ�����
��result����cur�ǽڵ�Ԫ��Ϊֹ.�������д�����һ��������ó���: 
* return 
jQuery.nth(a.parentNode.lastChild,1,"previousSibling")==a; 
* 
* ������ǲ�֪������˵ʲô,������ϸ�鿴����. 
* 
* @param {HTMLElement} cur 
һ����ͨ��DOMԪ��.ע��,������HTMLElementԪ��,XML��DOMԪ�ؿ���. 
* @param {number} result 
һ������.��������result��Ԫ�ص�ʱ��,����ֹͣ�����ؽ��. 
* @param {string} dir 
һ���ַ���,Ϊ'previousSibling'��'nextSibling'������һ. 
* @param {Object} elem ���Կ����ڱ������в�û���õ��������. 
*/ 
nth: function(cur,result,dir,elem){ 
result = result || 1;//֪��ҲҪ����һ�� 
var num = 0; 

for ( ; cur; cur = cur[dir] ) 
if ( cur.nodeType == 1/* Node.ELEMENT_NODE */ && ++num == 
result ) 
break; 

return cur; 
}, 
/** 
* ѡ��elem�������ֵܽڵ�. 
* ��������Ĵ����Ѿ��ܾ���,��̫����ϸ����.������Ʒζ. 


* 





* @param {HTMLElement} n 
����elem�����Լ����ֵܻ�����һ����Χ.elem���ֵܱ�����n������.ע��,��ʵ
��������HTML�ĵ�,XML�ڵ�Ԫ��Ҳ����ʹ�ñ����� 



* @param {HTMLElement} elem 
�������Ԫ��֮��,����n�е��ֵܽڵ㶼�ᱻ�ӽ������.ע��,Ҳ������HTMLԪ
��,XMLԪ�����. 

*/ 


sibling: function( n, elem ){ 



var r = []; 



for (; n; n = n.nextSibling ){ 



if ( n.nodeType == 1 /* Node.ELEMENT_NODE */ && n != elem 
) 



r.push( n ); 



} 



return r; 


} 



});//extend ���� 

































//---------------------------------------------------------------
�����jQuery�����¼��������չ -----------------------------



/* 


* A number of helper functions used for managing events. 


* Many of the ideas behind this code orignated from 


* Dean Edwards' addEvent library."


                                        */



                                        /*
                                        ������һϵ�е��¼�����.���������Ƕ�Ӣ����˵������,��Щ��������˼�벢
                                        ����John
                                        Resig�Լ�ԭ����.�������ǿ��Ե�,վ�ھ��˵ļ��֮��Ч���Ƿǳ����.

                                        * ����,˵����:

                                        *
                                        ���ﶨ��ķ������Ƕ�����jQuery.event�����ռ��ϵľ�̬����.���ǲ�ֱ�Ӳ�
                                        ��jQuery���û�����(��Ȼ����Ȩǿ�е�������,ֻҪ�������㹻�˽�).��Щ��


                                        * ����Ҫ�Ǳ�jQuery�����ϵ����¼���صķ�������.
                                        *
                                        * ע��, ���������ע���� "�¼���������" �� "�¼�������"


                                        ��������һ�µ�, ���������ǲ�ͬ�Ķ���...�����ע��.

                                        */



                                        //-------------------------------------------------------------------






                                        jQuery.event ={





// Bind an event to an element 


// Original by Dean Edwards 


                                        /**





                                         * ΪԪ�����һ���¼�������.



                                         *





                                         * @param {HTMLElement} elem Ԫ��, ����ҪΪ�����һ���¼�������



                                        * @param {String} types
                                        �ַ���,��ʾҪע����¼�����,��'click','moveover'��. 



* @param {Function} handler 
callback����,�¼�������,�˺������ᱻ����. 



* @param {Object} data 



*/ 


add: function(elem, types, handler, data){ 




// 8 ��comment���͵Ľڵ㣬 3 �� text 
�ڵ�,��Щ�ڵ�Ͳ���Ҫ���ʲô�¼���������. 





if ( elem.nodeType == 3/* Node.TEXT_NODE */ || elem.nodeType 
== 8 /* Node.COMMENT_NODE */ ) 





return; 






// For whatever reason, IE has trouble passing the window 
object 





// around, causing it to be cloned in the process 





// ��֪��զ��, ��IE�������, 
�����window������Ϊ�����������ݵĻ�����������ȷ����(�������ڲ�������
֪������window����).�������������� 





// 
��if���ж��ǲ�����IE��������Լ���鴫������elem�᲻�������window���� 
, �����, ����elem��������ָ��window. 




if ( jQuery.browser.msie && elem.setInterval ) 


//elem.setIntervale����ͨ��������elem�ǲ���window���� 





elem = window; 






// Make sure that the function being executed has a unique ID 





// ����: ȷ��ÿһ���¼�������(Ҳ����handler)����һ��ID. 




if (!handler.guid ) 





handler.guid = this.guid++; 


//thisָ�����jQuery.event��������ռ�,�����ʾ���һ������.guid�ĳ�ʼֵ
Ϊ1. 





// if data is passed, bind to handler ����:���������data, 
��ô�Ͱ���Щdata�󶨵�handler�� 





if( data != undefined ){ 





// Create temporary function pointer to original handler 





// ��handler�����ô���һ����ʱ�ı���fn. 
����Ҫ��������������һ��. 





var fn = handler; 






// Create unique handler function, wrapped around 
original handler 





// 
����:����һ��Ψһ�Ĵ�����,�������������ԭ�����Ǹ�������. 




// thisָ�����Ȼ��jQuery.event����. 
this.proxy������󷵻ص���Ȼ�����ĵڶ��������е��Ǹ��´�������������. 
this.proxy�������� 





// 
��������������fnһ����ID,���˶���(���Բο�jQuery.event.proxy����������
ע��.). ������proxy�������Ҫ˼����"����"���� 





//(wrapper function), �������������������ע��. 




handler = this.proxy( fn, function() { 





// Pass arguments and context to original handler 





// ����: ���ݲ����������ĸ�ԭ�����Ǹ�����(��fn) 







/* 





* 
���ֽ�һ������ʹ������һ������"����"�����ļ�����jQuery��ʮ�ֳ���, 
����Ŀ�ľ���ͨ���հ����������ݲ����Լ�������. �Դ����ﵽ�ı� 





* ���ݵĲ������߸ı���������ĵ�Ŀ��. 



* ��������һ��: 



* ��fn�������Ϊһ�����������ô�������ʱ��, 
�������õ������Ĳ�һ����jQuery.event. ����˵��������ȫ�ֵ��������� 



* ������һ���¼�������, 
��������еĴ������������this�ؼ���, 
��ô���this�Ϳ�������window����, ��Ϊ���ȫ�ֵĺ������ս��� 



* ��Ϊwindow����ķ���������. 
�������������Ҫ��fn��Ϊ��������ķ���������, 
���Ǳ���ʹ��apply(����call)�������ı亯����ִ��������. 



* �����������ı�fn��ִ��������, 
�뽫��������Ϊ�����¼����Ǹ�Ԫ�صķ���������. 
ע�����´����this�ؼ��ֵĺ���. 



*/ 






// ʵ���ϻ��ǵ���ԭ���Ǹ��������������¼�, 
����ʹ����apply����������this��Ϊ�µĺ���ִ��������.ע�������thisָ�� 





// һ��HTMLElementԪ��, ��������ôһ��"����"֮��, 
fn�ı����Լ���ִ��������Ϊ���HTMLElement, 
���ڲ�������thisȫ��ָ����� 





// ���HTMLElementԪ��. 
��ʵҪ��ȷ�����this����ָ�����ʲô, 
��Ҫ׷�ݵ����պ��������������õ�.������Բ鿴 





// jQuery.event.trigger����������ע�Ͳ���. 




return fn.apply(this, arguments); 





}); 






// Store data in unique handler 





// �����ݴ洢��handler����. handler�Ӵ���������, 
��������fn��ͬ�ĺ�������, ��fnһ����guid, �Լ��û���������data. 
����ͬ�ľ��ǵ��õ������� 





handler.data = data; 





} 






// Init the element's event structure





                                        // ����: ��ʼ�� element�� event���ݽṹ.




                                        /* �����Ķ����´���, ���������˽�����jQuery���¼�����:




                                        * ����, jQuery���¼���Ϊԭ���¼���jQuery�Զ����¼�.
                                        ��click, blur, focus���¼�,
                                        ����ԭ���¼�.��Щ�¼��Ĵ�����ϵͳ�Զ����; ���Զ���



                                        * �¼��Ĵ�������Ҫ�ֶ������. ��jQuery��ajaxStart,
                                        ajaxStop���¼�����jQuery�Լ������¼�, ��ΪJavaScript�����ṩ��Щ�¼�.



                                        *





                                        * jQueryΪ��ͳһ�������¼�, �Ƴ����Լ���add(ע��) ->
                                        trigger -> handdle -> remove �¼�ģ��.(��Ȼ��Щideas����Dean Edwards)



                                        *





                                        * ��JavaScript��,
                                        �¼�����������Ĺ�����JavaScript���������,
                                        ��"�ҵļ���������������?"����������, ���������Ҫ���. ��jQueryΪ�˻�



                                        * ȡ�������¼���չ,
                                        ����JavaScript�¼����ƻ���֮����չ���Լ����¼�����.
                                        ������¼�������,jQuery�Լ�������Щע����ĳ���¼��ϵȴ������ļ�������.



                                        * jQuery�¼����ƾ���������������:



                                        * (1) ע��: ʹ��jQuery.event.add�������.


                                        add�Ὣ�����������浽Ԫ�ص�events��������.
                                        ����¼����״�ע���������, ��ôjQuery�ͻ���





                                        *


                                        ΪԪ�ؿ��ٶ�һ���handle�����ݻ�����.
                                        ���������װһ������ΪjQuery.event.handle�ĺ���. ���������һ������,
                                        elem�������¼���





                                        *


                                        ���������ȵ����������,
                                        ����һЩ�¼�ģ�͵ļ����Դ���(��������)֮��,
                                        ���handle�����ͻ��Ԫ�ص�events��������ѡ��Ӧ�����еļ���





                                        *


                                        ����������.




                                        * (2) ����:
                                        jQuery�Զ����¼���ҪjQuery�Լ��ں��ʵ�ʱ���ֶ�����. ��ajaxStop�¼�,
                                        jQuery��鵱ǰajax������, ����鵽���������Ϊ0ʱ,



                                        *
                                        jQuery�͵���jQuery.event.trigger�Լ��ֶ�����ajaxStop�¼�.




                                        *
                                        ������ԭ���¼�,��ͨ��������handle����ע��Ϊԭ�����¼�������������.
                                        Ҳ��һ������: ����click�¼�. jQueryʹ��





                                        *
                                        addEventListener/attachEvent�������handle����ע�ᵽ��JavaScript��ԭ��
                                        �¼�������. ��click�¼�����ʱ, ����handle����





                                        *


                                        �ͻᱻ����.




                                        * (3) ����: jQuer.event.handle
                                        ����elem�������¼�������������֮ǰ����.���Ĺ�����Ҫ����Ϊһ������,
                                        �����¼�ģ�͵����������������,



                                        *


                                        ����¼��������ռ�,
                                        ����Ԫ�ص�evnets���������б���, ���ִ����Ҫ�����ļ�������.




                                        * (4) ж��:
                                        ԭ���¼���ҪremoveEventListener/detachEvent���Ƴ�ע�����¼����ϵĴ���h
                                        andle����. ����˵��, �����¼����͵��¼���������



                                        *


                                        ��jQuery�洢��elem��events���ݻ�������,
                                        ����ж���¼���������ʱ,
                                        jQuery�ͻ��elem��events���ݻ�������ɾ���ú���������. ���





                                        *


                                        jQuery����eventsΪ����,
                                        ˵��elem�Ѿ�û���¼���������,
                                        events���ݻ�������handle���ݻ����������Ƴ�.





                                        *





                                        *





                                        */







                                        // ׼��ȡ��elem�Ļ�������( jQuery ������ÿһ��Ԫ��"����"����
                                        )",��Щ������"events"��Ϊ��ֵ����ȡ�����" events " ������Ӧ������





                                        // ���� " events " ��ʼ��Ϊ 
{}.ע��jQuery.data���÷�:��û�д������������ʱΪ��ȡԪ�صĻ�������.��
                                        �����˵���������,��ô��������Ԫ�ص�





                                        // ��������.
                                        events����ʹ�ø����¼����͵�������Ϊ��ֵ����ȡ����, ��click,
                                        mouseover��, events['click']��õ��Ǵ���click�¼����� 





// �б�. 




var events = jQuery.data(elem, "events") || jQuery.data(elem, 


"events", {}), 




//���"||" 
��ߵĴ��벻�ܻ�ȡelem��handle,�Ǿ�˵��Ŀǰ��ûhandle,�Ǿ��Լ���ʼ��һ
�� 





handle = jQuery.data(elem, "handle") || jQuery.data(elem, 
"handle", function(){ 



// Handle the second event of a trigger and when 





// an event is called after a page has unloaded 





if ( typeof jQuery != "undefined" && !jQuery.event. 
triggered ) 





return jQuery.event.handle.apply(arguments.callee 
.elem, arguments); 





}); 







// Add elem as a property of the handle function 





// This is to prevent a memory leak with non-native 





// event in IE. 





handle.elem = elem; 






// Handle multiple events separated by a space 





// jQuery(...).bind("mouseover mouseout", fn); 





/* 





* ������¼�������,��Щ�¼�ʹ��" "�Ÿ���. 



* ����jQuery�����ľ�̬each����, 
��ÿһ���¼�����ʹ��һ���������д���.���ڴ����������ʲô, 
�Ǿ������¿��� 



*/ 





jQuery.each(types.split(/\s+/), function(index, type){ 





// Namespaced event handlers 





var parts = type.split("."); 




/* ����Ҫ�������"Namespaced event handlers"����˵��: 




* "Namespaced 
event"��jQuery"ԭ��"�ĸ���,ּ�ڽ�ĳ���ض����¼����͵ļ����������и���
ϸ�Ļ���,�Ӷ��ﵽ��������ɾ��,�����¼������� 



* ����Ŀ��. 
��jQueryͨ��Ϊ�¼��������".namespace"�ķ�ʽ����һ���¼����͵Ĳ�ͬ����
�������л���. ��"click.myClick", 



* 
"click.yourClick",�������ǵ�������Ҫж�ػ��߼���ĳ���ض���Click�¼���
����ʱ������ôд:$('.someClass').unbind('click.yourClick'). 




* 
����ʹ��"click.yourClick"�󶨵��¼��������ͻᱻ�Ƴ�,����ʹ��"click.m 
yClick"ע����¼��������ͱ�����. 




* 





* �����й�"Namespaced event 
handlers"����Ϣ,��ο�jQuery�Ĺٷ���վ, ����������: 



* http://docs.jquery.com/Namespaced_Events 



*/ 






type = parts[0]; 


//part[0]��"."��ߵĲ���,��"click.yours"�е�"click" 




handler.type = parts[1]; 


//parts[1]���¼��������ռ�,��"click.yours"�е�"yours" 





// Get the current list of functions bound to this event 





// ����:��ȡ��ǰ��������¼��ϵĴ������б�. 




var handlers = events[type]; 






// Init the event handler queue 





// �����������type��ָʾ���¼����͵Ĵ������б�, 
���Լ�����һ��. 




if (!handlers){ 





handlers = events[type] = {}; 






// Check for a special event handler 





// Only use addEventListener/attachEvent if the 
special 





// events handler returns false 





/* �ȷ���:��������¼�(ready, mouseenter, 
mouseleave)�Ĵ�����,��������¼��Ĵ���������false�Ǿ�ֻ�� 





* addEventListener/attachEvent ����Ӵ����� 



* 





* ��,���ڽ���˵��: 



* ��ν�������¼�Ҳ������:ready,mouseenter,mouseleave 



* 
ready�¼��������������֧�ֵ��¼�(���������û������"onReady"��������
��),ready��DOM Ready֮��,��Щ�������"DOMContentLoaded"�¼���֮���Ӧ. 




* 
����DOMContentLoaded�¼������ռ�,��˲���ͨ��ͳһ��addEventListener/at 
tachEvent���������¼�.jQuery��ʹ��bindReady������ĺ����󶨵� 





* DOMContentLoaded�¼�����, 
��˲���Ҫʹ��addEventListener/attachEvent�����¼�,Ҳ����˵��������
�Ĵ��������������. ����Ĵ���(����if���)�� 



* 
����Ϊһ����¼�(��mouseover,click��)��Ӵ�������. 
����IE��w3c�����˲�ͬ���¼�ģ��,���if�ڵ��������if�������¼�ģ�ͽ���
������. 




* 





* 
mouseenter��mouseleave��IE��֧�ֵ��¼�,w3c��֧�ֵĶ�Ӧ�¼���mousein��m 
ouseout.��������¼���mouseenter��mouseleave�е�һ��,���ҵ�ǰ����� 





* 
����IE,��ôҲ�������if�����������¼��������İ�. 
�����ǰ���������IE������Ҫ����������¼�, 
��ô"jQuery.event.special[type].setup.call(elem)" 





* �ķ���ֵ������false, 
��ô����Ҳ���ǲ���������Ĵ�������¼��İ�, ������ 
jQuery.event.special[type].setup �����ڲ�ʹ��jQuery����� 



* bind����, ���� mouseenter��mouseleave 
���Ӧ��w3c�¼�,��mouverover ��mouseout. 



* 





* ������Բο�jQuery.event.special�е�����ע��. 



*/ 





if (!jQuery.event.special[type] || jQuery.event. 
special[type].setup.call(elem) === false ){ 





//��setup��Ϊelem�ķ�������, ����setup�����е� 





//this�ؼ��־ͻᱻ�滻��elem������. 






// Bind the global event handler to the element 





if (elem.addEventListener)// FF 





elem.addEventListener(type, handle, false); 





else if (elem.attachEvent)// IE 





elem.attachEvent("on" + type, handle); 



} 





} 






// Add the function to the element's handler list





                                        // Ԫ�� elem ��ÿһ�����͵� event �������ɵ� handler. ��


                                        handlers ������Щ handler �ļ���. ÿһ��handlerʹ�����Լ���guid������.




                                        handlers[handler.guid]= handler;






                                        // Keep track of which events have been used, for global
                                        triggering





                                        // ��¼�µ�����Щ�¼���ʹ��( ����˵������ )��,
                                        ��trigger��������Ҫ�õ��������





                                        jQuery.event.global[type]= true;





                                        });






                                        // Nullify elem to prevent memory leaks in IE





                                        // ��elem����������Ϊnull,������IE�е����ڴ�й©.




                                        elem = null;
                                        },

                                        guid: 1,
                                        global: {},

                                        // Detach an event or set of events from an element
                                        /**



                                        * ж��һ���¼�,����һ���¼�����.



                                        *





                                        * @param {HTMLDOMElement} elem



                                        * @param {Object} types -�������ַ���, Ҳ������һ���¼�����.



                                        * @param {Function} handler



                                        */


                                        remove: function(elem, types, handler){



// don't do events on text and comment nodes 





                                            if ( elem.nodeType == 3/* Node.TEXT_NODE */ || elem.nodeType
                                            == 8/* Node.COMMENT_NODE */ )





                                            return;//������ı��ڵ��ע�ͽڵ�,�Ͳ��øɻ���,ֱ�ӷ���. 





                                            var events = jQuery.data(elem, "events"),


//��ȡΪelem�����������Ϊ"events"������. 
                                            ��ʵ����Щ���ݾ���Ϊelem��ע����¼���������





                                            ret, index;






// 
                                            �����elemԪ����������events�ģ�Ҳ��Ԫ���ж�ĳЩ�¼����м�����,�Ϳ���
                                            ���������¼�����������ж�ع���;���eventsֵΪ��,��������.




                                            if ( events ){





// Unbind all events for the element 





// ���typesΪundefined, 
                                            ����˵types����ַ�����"."��ͷ,��ж��Ԫ���ϵ������¼���������.




                                            if ( types == undefined || (typeof types == "string" &&
                                            types.charAt(0) == "."))



                                            for ( var type in events )





                                            this.remove( elem, type +(types || "") );




// �������Ĳ����ַ��������Ҳ�Ϊ undefined ( 
                                            �������ַ�������ʾҪ remove �Ĳ��� )




                                            else {





// types is actually an event object here 





// �������� types ����һ���¼�����( ���� event || 
                                            window.event ������� )����ô�Ͱ� handler �� types������ " ���� " ����





// ��������Ĵ���Ͳ����޸�,�������������� 





                                            if ( types.type ){


//ͨ�����types����û��type�������ж�types�ǲ���һ��event���� 





                                            handler = types.handler;


//types�ϵ�handler��������jQuery.event.handle����������ϵ�,Ŀ�ľ���Ϊ
                                            �˷����������������ɾ





//��.��ϸ�μ�jQuery.event.handle���� 





                                            types = types.type;


//��types��������ָ��һ���¼�����. 




                                            }






                                        // Handle multiple events seperated by a space





                                        // jQuery(...).unbind("mouseover mouseout", fn); 





/* 





* ����: 
�����ÿո������ж�ض���¼����¼��������ĵ����.�� 
jQuery(...).unbind("mouseover mouseout", fn); 



*/ 





jQuery.each(types.split(/\s+/), function(index, type){ 





// Namespaced event handlers 






/* 





* ������" Namespaced event handlers
                                        "���˽�,�뵽jQuery.event.add�в鿴��Ӧ������ע��. 



*/ 






var parts = type.split(".");



                                        type = parts[0];//part[0]���¼�����






                                        // ���ǵ�ǰ��jQuery.event.add�����е� handlers
                                        ��? events[ type ] �͵��� handlers




                                        if ( events[type]){


//�����type��ָ�����¼����а��¼���������, 
                                            �Ǿ����������ɾ����Ӧ�ļ�������.





// remove the given handler for the given type 





// 
                                            ��������handler�������õģ���ʾ������Ҫɾ������type��ָ���¼��ϵ�h
                                            andler��ָ���Ǹ���������.�Ǿ�ֻ��ȥ���handler��





                                            if ( handler )





                                            delete events[type][handler.guid];


//ʹ�ú�����Ψһid������ɾ�� 






// remove all handlers for the given type 





// ���û�д���handler, 
                                            �������Ǵ�����elem,types��˵��Ҫ��ȥ��Ӧ�¼������� handler




                                            else





                                            for ( handler in events[type])





// Handle the removal of namespaced 
                                            events





                                            /* ɾ����ʱ��Ҫע����: 




                                             * 


                                             (1)���parts[1]�ǿ�ֵ,˵�����ǲ�û��ʹ�������ռ��ĳ���¼����͵ļ�����
                                             �����н�һ���Ļ���.��ô��Ҳ�Ϳ��Է��ĵ� 



                                             * ɾ��type��ָ���¼��µ����м�������. 



                                             * 


                                             (2)���parts[1]����ֵ��,��ô�ͽ���ɾ����Щ�����ռ���parts[1]��ͬ��hand 
                                             ler. ע��,���д����е� 



                                             * "events[type][handler].type 
                                             "�ڵ�"type"��������jQuery.event.addʱ���ϵ�. 



                                             */





                                            if (!parts[1] || events[type][
                                            handler].type == parts[1])





                                            delete events[type][handler];






// remove generic event handler if no more 
                                            handlers exist





                                            /* 
                                             �������forѭ�����ϵش�events[type]ȡ����������,�����뵽ret��. 




                                             * 
                                             һ��name�����һ������ת��Ϊtrue��ֵ,for��ѭ����ͻᱻִ��.ִ��֮�� 





                                             * 
                                             ��Ȼ��break...���Ǿ�����һ������:���Ԫ���Ƿ����Զ��������. 




                                             * ע��,Ԫ�صļ̳����Բ��ܱ�for 
                                             inѭ��ö��.�����Object�м̳������� 



                                             * toString�����Ͳ��ܱ�for in���ʵ�. 



                                             */





                                            for ( ret in events[type]) break;





                                            if (!ret ){
//!retΪtrueʱ˵��events[type]���Ѿ�û�����¼���������. 






// ��� type ��ʾ�Ĳ����������¼�( �� 
                                            ready ),
                                            �����������¼�,��teardown������Ϊ��������¼�����ʹ������ļ��





// ������ж���¼�������, 
                                            ��û�б�Ҫ��������������,
                                            �Ǿ���ʹ������Ĵ���(if������ڴ���)��ֱ��ж��.�������Ȥ��֪��





// 
                                            Ϊʲôteardown��������Ϊ"û��Ҫ������ж������¼��ϵļ�������",��ο�j
                                            Query.event.special�ڵ�teardown����������ע��





                                            if (!jQuery.event.special[type] ||
                                            jQuery.event.special[type].teardown.call(elem) === false ){





                                            if (elem.removeEventListener)// FF 





                                            elem.removeEventListener(type,
                                            jQuery.data(elem, "handle"), false);



                                            else if (elem.detachEvent) // IE 





                                            elem.detachEvent("on" + type,
                                            jQuery.data(elem, "handle"));



                                            }







                                        ret = null;





                                        // ���� type
                                        ������¼��µ������¼�handler����Ҫ��, ��Ϊǰ�� !ret
                                        ������ʾ�ü���Ϊ����





                                        delete events[type];





                                        }





                                        }





                                        });





                                        }






                                        // Remove the expando if it's no longer used 





// ����: 
���events���ٱ�ʹ��,�Ǿ�ɾ����Щexpando(�Ǽ̳е�)����. 







for ( ret in events ) break; 





if (!ret ){ 


//���ret��ȻΪundefined(��������ĳ�ʼֵ),˵��events�ǿյ�. events 

����, ��ʾ���Ԫ����Ҳû���κεļ����¼�. 




var handle = jQuery.data( elem, "handle" ); 



if ( handle ) handle.elem = null; 





jQuery.removeData( elem, "events" );// 
�Ƴ�elem�ϵ��¼����������б�, ��Ϊ���ǿյ�. 





jQuery.removeData( elem, "handle" );// 
�Ƴ�������¼�������. 





} 





} 
}, 
/** 



* trigger����Ҫ����������������: 



* (1) ����ͨ��jQuery.event.addע��ļ������� 



* (2) ִ���û������extra���� 



* (3) �������ص��¼�������(��ֱ��д��HTML��ǩ�ڵĺ���) 



* 





* trigger������󷵻�һ������ֵ, 
��������Ը����������ֵ�������Ƿ����Ĭ����Ϊ. 
�����ֵ������ʲô(true or false), ���������е��������� 



* ͬ����. ����, trigger��������undefinedҲ�������. 



* 





* @param {string} type -�¼����� 



* @param {Array} data -��Ҫ�����¼��������������� 



* @param {HTMLElement} elem -�����¼�Ԫ�� 



* @param {boolean} donative - donative ��ʵΪ"do native", 
�Ƿ�ִ�б��ط���(��ֱ��д��HTML��ǩ�е��¼�������) 



* @param {Function} extra -�û���Ҫ�ڴ����¼�������֮��, 
��Ҫ�����еĺ���. ���������ִ���ܹ�Ӱ��trigger���շ��ز���ֵ. 



*/ 


trigger: function(type, data, elem, donative, extra){ 



// Clone the incoming data, if any 





data = jQuery.makeArray(data); 


//makeArray������dataת��Ϊһ������������. 





// ������¼����� type ��Ȼ�ᱥ�����ַ�" ! " !? 
��ʵ���ʾ����һ�� ! ( not ) �Ĳ���. �� !click ���ǳ��� click 
֮����¼� 





if ( type.indexOf("!") >= 0 ){ 



type = type.slice(0,-1); // �൱��type = type.slice( 0, 
length+(-1) ); ȥ�����һ���ַ� 





var exclusive = true; // ���������Ϊtrue 
���߳���type�к��� " ! " 





} 






// Handle a global trigger ����:������һ��ȫ�ֵĴ����� 





// ���elem�ǿյ�, 
��ô����Ϊ��Ҫ����������Ԫ���ϵİ���type��ָ���¼��ϵ����м�������. 




if (!elem ){ 





// Only trigger if we've ever bound an event for it





                                        // �� add �������������һ�� jQuery.event.global[type]
                                        = true ��? ��ʱ�������ó���





                                        // ���if�ڵ����Ϊtrue, ��˵�� type
                                        ��ʾ���¼��Ѿ�������,��ҪΪ����¼����봥����( trigger )




                                        if ( this.global[type])





                                        //
                                        ��jQuery������������м���window,document����





                                        jQuery("*").add([window, document]).trigger(type,
                                        data);





                                        //
                                        Ȼ��Ϊ��Щ������Ӵ�����( trigger )







                                        }





                                        // Handle triggering a single element





                                        // ������ǿյ�,
                                        �Ǿ���Ҫ��������Ԫ�صİ���type��ָ�����¼��ϵ��¼���������.




                                        else {





// don't do events on text and comment nodes 





                                            if ( elem.nodeType == 3 /* Node.TEXT_NODE */|| elem.
                                            nodeType == 8 /* Node.COMMENT_NODE */ )// 3 ��text node, 8 ��comment 
                                            node




                                            return undefined;






                                            var val,





                                            ret,





                                            fn = jQuery.isFunction( elem[ type ] || null ),





// Check to see if we need to provide a fake event, 
                                            or not






                                            /* ��������data��Ҫ�����¼���������, 
                                             ����׼�¼�ģ����Ҫ���¼����������ĵ�һ������������event����,��data[0]
                                             ������event����, 




                                             * �������Ǳ�����data��[0]�ǲ���event����. ��, 
                                             �ǵ�Ȼ��; �������, ��������data��ͷ������һ��α���(fake)event����. 



                                             */





                                            event =!data[0] || !data[0].preventDefault;// 
                                            preventDefalt�� w3c�ı�׼����,����event����ķ���.




// 
                                            ������ܼ��data[0]�����������֤��data[0]����event����.




// Pass along a fake event 





// OK, ������ҷ�����(data[0]����event����), 
                                            �������Լ���������һ��.




                                            if ( event ){


//data[0]������w3c��׼���¼�����,�Ǿ��½���һ������,��һ��event�����
                                            �е�һЩ���������Զ����뵽���������,����





//unshift�����Ѷ������data�����ͷ��. 




                                            data.unshift({





                                            type: type,





                                            target: elem,





                                            preventDefault: function(){},





                                        stopPropagation: function(){},





                                        timeStamp: now()





                                        });






                                        //expando ֻ��һ���� " jQuery " + now()
                                        ��ɵ��ַ���, �Դ��ַ�����Ϊһ��������,
                                        ��Ϊ��˵������һ��jQuery��������¼�����





                                        data[0][expando]= true; // no need to fix fake


                                        event ����,�¼������Ѿ��������,���������Լ�����ȥ��, �������. �Ժ�





                                        //
                                        data���ܻᱻ���뵽jQuery.event.fix������,
                                        fix��������expando�������, ���ͻ��Թ�һЩ����.





                                        //
                                        ��ϸ��Ϣ��ο�jQuery.event.fix����������ע��.





                                        }








                                        // Enforce the right trigger type





                                        // ���¼�����ǿ���޸�Ϊ��ȷ������.




                                        data[0].type = type;






                                        // �������õı�־: �Ƿ���" ! " �ַ�





                                        if ( exclusive )





                                        data[0].exclusive = true;//


                                        ���¼������ϼ�������exclusive.





                                        // Trigger the event, it is assumed that "handle" is a
                                        function





                                        // ����: �����¼�, "handle"��������һ������ 





// ��, ��һ��:����ͨ��jQuery.event.addע��ĺ���. 




var handle = jQuery.data(elem, "handle"); 


//ͨ��elem�����ݻ�����, ��ȡelem�ļ�������. 




if ( handle )//�����������������м�������, 
��ô�ͽ��������������Ϊelem�ķ���������. 




/* ע��, 
elem�����ݻ������л�������handle������������jQuery.event.addע�����
��handle. 




* ���handle��������jQuery.event.handle. 
�������þ�������elem����ĳ���¼��ϵ������¼���������. 



* Ҳ����˵, 
������ͨ��jQuery.event.addע��һ���¼���������ʱ, 
add�����ڲ���������������Ž�ĳ���¼��ļ��������� 



* ����. 
����˵jQuery.event.add('click',function(){//do some thing}), 
�����������뵽elem��click�¼� 



* ���������б�, ��events['click']. 
�����events�б�������jQuery�����ݻ�������, 
��ͨ��jQuery.data(elem,'events') 



* ��ȡ. Ȼ��, �������elem�״���Ӽ�������, 
add�������ٸ�elem ����һ�����ݻ�����, ���������������ֻ��һ������. �� 



* �������������������������ȡ�����handle. 



* 





* �κ�һ���¼�������ʱ, 
jQuery���ǵ�Ԫ�ص����ݻ�����ȥ��ȡ���handle, 
�������handle��Ϊһ������, �ڽ���¼�ģ�͵ļ����� 



* 
�����,��һ����elem���ڸ��¼��ϵ��¼���������. 





*/ 





val = handle.apply( elem, data );//����, 
ִ�д���handle����, ����elem�ϵ��¼����������ᱻִ��. 





/* 





* ����������val�ٲ���һЩ˵��: 



* 
����jQuery.event.handle��Ϊ���еļ��������Ĵ�����, 
��˳���Ҫ����ʵ�ʵ��¼���������֮��, ��Ҫ����ԭ�����¼�������������� 





* ���򽻵�. 



* 





* ��û�д����ʱ��, 
�¼����������ں���ִ�����֮�󽫷���һ������ֵ������(true)����ȡ��(fal 
se)�������Ĭ����Ϊ. ��ô����������� 



* ԭ���ļ�������֮��, 
������������ȻҪ����ͬ����һ������ֵ(val)�����������������. 



* 





* ����Ĵ��뽫Χ���������ֵ(val)չ������. 





*/ 








// Handle triggering native .onfoo handlers (and on 
links since we don't call .click() for links) 





// ����fn,�����д���: fn = jQuery.isFunction( elem[ type 
] || null ) 




if ( (!fn || (jQuery.nodeName(elem, 'a') && type == 
"click")) && elem["on"+type] && elem["on"+type].apply( elem, data ) 
=== false ) 





val = false;//���û�б��غ���, �Ǿͷ���false. 





// Extra functions don't get the custom event object 





// ����: Extra����������Ҫ�û��¼����� 





// ����Extra���û��Լ��ṩ�ĺ���������һ���¼���������, 
��˲���Ҫ�¼�����,������Ҫdata[0]. 




if ( event ) 





data.shift();// �Ƴ���һ��Ԫ��data[0] 





// Handle triggering of extra function 





// ����extra����. 




if ( extra && jQuery.isFunction( extra )){ 


//����û����������extra��������extra�����һ������. 




// call the extra function and tack the current 
return value on the end for possible inspection 





// ����: 
����extra�������ҽ���ǰ��trigger����ֵ���뵽extra�����Ĳ����б�ĺ��� 





ret = extra.apply( elem, val == null ? data : data. 
concat( val ) );//�������extra���� 





// if anything is returned, give it precedence and 
have it overwrite the previous value 





// ����: ������κη���ֵ, 
�������ȼ��������ǵ�ԭ����val��ֵ. 





if (ret !== undefined) 





val = ret; 





} 








// Trigger the native events (except for clicks on links) 





// ����: ���������¼�(����link��click�¼�) 




/* ������˵�� "native events" 
ָ����ֱ��д��HTML��ǩ�ڵ��¼�������. 





* ��ִ����jQuery��ע����¼�������֮��, 
�����,�Ǿ��ټ���ִ�� "native events" �ĺ���. 



* donative��һ������, ����������Ƿ�Ҫִ�д��������¼�. 



*/ 





if ( fn && donative !== false && val !== false && !( 
jQuery.nodeName(elem, 'a') && type == "click")){ 



//this������ָ����jQuery.event 




this.triggered = true; 





try { 





// ִ��elem �ϵ� [type] ���� 





elem[ type ](); 





// prevent IE from throwing an error for some hidden 
elements 





// ����: 

��ֹIE��һЩ���ص�Ԫ����ִ�б����¼����������׳���������. 
} catch (e) {} 
} 

this.triggered = false; 

}//Ϊ����Ԫ�ش��������������� 


//���� val ����һ������ֵ. 
��������Ը������ֵ�������Լ��Ƿ�ִ��Ĭ����Ϊ. 
return val; 
}, 

/** 
* ִ��event��ָ���¼������µ�, �봥��Ԫ���йص������¼�����! 
* jQuery���¼�����Ҫ�󴥷��������¼��������������������, 
������һЩ�������, �����ռ���صĹ���֮��, 
���������������а���ָ���¼��ϵ����� 
* Ӧ�����е��¼���������. 
* 
* ע�Ȿ�����Ĳ���event����, ����jQuery����, 
��������ԭ����JavaScript�¼����ƴ���. 
* 
* @param {Event} event -�¼����� 
*/ 
handle: function(event) { 
// returned undefined or false 
var val, ret, namespace, all, handlers; 

// 
IE��w3c���¼�����ģ�����бȽϴ�Ĳ���.���������ߵ��¼��������������÷�
Χ�Ĳ�ͬ,��ξ����¼������������Ҳ������ͬ. 
/* (1) 
���÷�Χ�Ĳ�ͬ:��IE��,�¼�����(event)����Ϊwindow�����Զ����ڵ�.��wind 
ow.event���Ի�ȡ���¼����������.���������һ��ֻ���� 
* 
һ���¼�,���������Ʊ�����Ȼ��ֵ�����������ʲô����.����w3c��,�¼���
�������¼����������ʱ��Ϊ��һ����������.��click(e)�еĲ���'e' 
* ʵ���Ͼ���һ���¼�����event������. 
* (2) 
�������¼�ģ����,event���������Ҳ������ͬ.�羭����¼�Դ������IE��ʹ
��event.srcElement����,��w3c�����event.target.������ 
* �Ͳ�һһ�о�. 
* 
* 
��ʵ,w3c���¼�ģ���ǲο�IE���¼�ģ���ƶ�������...��,IE��w3c��׼֮���'
��Թ'�����˵��������... 
* 
* 
����������ʵ,Ϊ���ô����ܹ���һ��ͳһ����Ϊ,�������д���͵���jQuery.e 
vent.fix����event��������'����'.����fix��������ʲô����,���� 
* �ο�jQuery.event.fix����������ע�Ͳ���. 
*/ 
event = arguments[0] = jQuery.event.fix( event || window. 
event ); 

// Namespaced event handlers //����"Namespaced event

                                        handlers" ��Ctrl + F, ����������������ע������˵��. 




namespace = event.type.split(".");



                                        event.type = namespace[0];


                                        //namespace[0]����������type,����ֵ������'click','load'��. 




namespace = namespace[1];//��namespace[0]�����'�����ռ�' 





// Cache this now, all = true means, any handler 





// 
���û�������ռ䲢������¼���û�б�����Ϊ'�ų�(exclusive)',��ô��ʾ��
                                        �еļ�������������. �������˽�"Namespaced event handlers",
                                        ��Ȼ�����״˴�������





                                        all =!namespace && !event.exclusive;






                                        /*
                                        ����jQuery.data��ȡ���󻺳������.��Щ������һ����ǩ,����'events'.����
                                        ����Щ������ʱ�䴦���й�.��ʵ��,��Щ���ݶ���һЩ�¼�������.




                                        *
                                        ��JavaScript��,"����Ҳ������",������ܹ�������ͱ��޸�,�Լ�������.Ҳ��
�����һ����ʵ�����е�����. 




* 
�����events�����ݻ������ľ���λ��ΪjQuery.cache['XXXXXX']['events'].' 
XXXXXX'��ʾ����Ԫ�ص�id.���id��jQuery.data���������� 





* 
���洢��һ�������ֺ��ر��������.������Ե�������jQuery.expandoָ��.��
�����Ctrl+F����expando������ע��. 




* ���������event.type,��ô�������������˼����: 



* 
�����ݻ�����jQuery.cache['XXXXX']['events'][event.type]ȡ������,������
��handlers.��event.type == 'click' 




* handlers����,һ���¼����ͻ��кܶ��handler,��֮��ֻһ��. 



*/ 





handlers =( jQuery.data(this, "events") || {} )[event.type]; 




//�õ�����Щ�¼�������֮��,���������ִ�� 





for ( var j in handlers ){ 





var handler = handlers[j]; 






// Filter the functions by class 





// handler.type 
������������Ǳ�ʾ���handler����һ�����͵�.��ʵ������namespace. 
��һ������������ע��ʱjQuery.event.add�� 





// ���������������ռ丳���˼���������type������. 
Ҳ��˵�������ǿ�����handler.type��ʵ���������������ռ�. 




if ( all || handler.type == namespace ){ 





// Pass in a reference to the handler function itself 





// So that we can later remove it 





// 
����:��event�½�һ������,���������һ��ָ��handler������,�����ͷ�����
���ڲ���Ҫ��ʱ����ɾ����. 




event.handler = handler; 





event.data = handler.data; 


//����hanlder���������,��Щ��������jQuery.event.add�����б������. 





// 
this��ָ�Ķ�����jQuery.event.������δ��뽫hanler��ΪjQuery.event�ķ�
������,����handler�ķ���ֵ���浽ret��. 




ret = handler.apply( this, arguments ); 








//val�ں����Ŀ�ͷ������,һֱ�������ʹ��.�ɼ�val��ֵһֱ����undefined( 
JS��,�����ոձȶ����ʱ��ֵΪundefined). 




//����undefined !== 
false.if�ڵĸ�ֵ����ƺ�������õ�ִ��.�ҿ�û���ƴ�Ұ�,�����ϸ���ÿ� 
. 




if ( val !== false ) 





val = ret; 






// �������ִ��֮��ķ���ֵ��false, 
˵��Ҫ��ֹ�������Ĭ����Ϊ���¼�ð��,����event�е����������������. 




// 
ע��,event.prentDefault��event.stopPropagation��w3c����ķ���.IE��Ҫ��
���������鲢����������. 




// 
֮�����ܹ�ͳһ�������ַ�ʽ������,��鹦��jQuery.event.fix����.�������
��д��event.prventDefault��event.stopProgation 




if ( ret === false ){ 





event.preventDefault(); 





event.stopPropagation(); 





} 





} 





} 






// 
���ش�����,�������ڱ������п�����,�󲿷�ʱ�����val��undefined. 




return val; 
}, 

/** 



* 
������������(��Ҫ��IE��w3c��׼)���¼�����ģ���ϵĲ�ͬ.�������������
�ܹ���һ��ͳһ�ķ�ʽ�������¼�����. 




* @param {Event} event �¼�����. 



*/ 


fix: function(event){ 



// 
���event�Ѿ�����һ���ض������Բ�������ֵ��true,˵������¼������Ѿ���
�������,ֱ�ӷ��ؾͿ�����. ע��,������Ե�����ÿˢ��һ�� 





// 
��������᲻һ��.�������event����û�б������(Ҳ����˵û�б���׼����) 
,��event�����ǲ���������ض������Ե�. 




if ( event[expando] == true ) 





return event; 






// store a copy of the original event object 





// and "clone" to set read-only properties 





var originalEvent = event; 





event ={ originalEvent: originalEvent }; 






// ������Щ�ַ�����ʾ��һ����׼�� event 
������Ӧ�þ߱��ı�׼������ 





var props = "altKey attrChange attrName bubbles button
                                        cancelable charCode clientX clientY ctrlKey currentTarget data
                                        detail eventPhase fromElement handler keyCode metaKey newValue
                                        originalTarget pageX pageY prevValue relatedNode relatedTarget
                                        screenX screenY shiftKey srcElement target timeStamp toElement type
                                        view wheelDelta which".split(" "); 





for ( var i=props.length; i; i--) 





event[ props[i]]= originalEvent[ props[i] ]; 






// Mark it as fixed 





// ������ô����,event ���е����Զ�����,���һ�� 





event[expando]= true; 








/* 





* ����������,����Щ���Ծ����ֵȴû�а�. 
����Ͱ���Щ���Ե�ֵ���� 



* 
�����µĴ�����,���ǿ��Լ�ʶһ��,���¼�����ģ�ͷ���IE��w3c֮��Ĳ���.��
�Ҿ�����Щ����㶨���¼�ģ�͵Ĳ�һ��,��ֵ������ѧϰ. 




*/ 








// add preventDefault and stopPropagation since 





// they will not work on the clone 





/* 
���preventDefault��stopPropagation��������.�����ڱ���������eventָ��
������һ���½��Ķ���,ԭ�������������Ǵ�����w3c��׼��event 




* 
�����е�,����û��.���������ﲹ��,���Ҹ�д���ǵ�����,ʹ����Щ�����ܹ���
�������Ե�����. 




*/ 





event.preventDefault = function() { 





// if preventDefault exists run it on the original event 





// 
w3c��׼�涨����������ֹ�����Ĭ����Ϊ.ʲô��Ĭ����Ϊ?����˵���ǰ�Ctrl+ 
S��ʱ��,�Ǳ�����ҳ,���һ�����ӵ�ʱ�����㵼����һҳ��� 





// ��Щ�����������Ĭ����Ϊ. 




if (originalEvent.preventDefault) 





originalEvent.preventDefault(); 





// otherwise set the returnValue property of the 
original event to false (IE) 





// IE����������һ�ַ�ʽ 





originalEvent.returnValue = false; 





}; 






/* ��������һ��ֹͣ�¼�ð�ݵĺ���. 




*/ 





event.stopPropagation = function() { 





// if stopPropagation exists run it on the original event 





// w3c�����������������ֹ����������¼�ð�� 





if (originalEvent.stopPropagation) 





originalEvent.stopPropagation(); 





// otherwise set the cancelBubble property of the 
original event to true (IE) 





//IE����������һ�ַ�ʽ 





originalEvent.cancelBubble = true; 





}; 






// Fix timeStamp 





// 
��IE����û��'ʱ���(timeStamp)'����������.���û�����������. 




event.timeStamp = event.timeStamp || now(); 






// Fix target property, if necessary 





// 
w3c�涨�¼���Դ����ʹ��target������.����IE����ʹ��srcElement. 




// ������һ��Safari��bug,�ٷ�������������:"In Safari 2.0
                                        event.target is null for window load events..."����Ȥ���Կ�: 




// http://dev.jquery.com/ticket/1925 
����Ϊ�˽���������,������Ҫ����" || document
                                        "����ֹevent.targetΪundefined. 





if (!event.target ) 





event.target = event.srcElement || document; // Fixes 
#1925 where srcElement might not be defined either 






// check if target is a textnode (safari) 





// 
������,safari�������ı��ڵ㲶׽�¼���.Ϊ��ͳһ��Ϊ,�ò�׽�¼��Ķ���Ԫ
�ؽڵ�(��Ҫ��nodeName),����Щ�ı��ڵ�������ڵ����������ǲ�׽�¼� 





if ( event.target.nodeType == 3/* Node.TEXT_NODE */ ) 





event.target = event.target.parentNode; 






// Add relatedTarget, if necessary 





/* 
relatedTarget��w3c�¼�����ģ���б�����.Ҳ����˵,��w3c���¼�������,Ӧ��
��relatedTarget����.���������mouseover�� 





* 
mouseout�¼����,�����������¼�������û��.����mouseover��˵,���������
��Ŀ����ʱ���뿪���Ǹ��ڵ�.����mouseout��˵, 




* �����뿪Ŀ��������Ľڵ�. 



* 
��IE��,��relatedTarget��Ӧ�ľ���fromElement��toElement.ǰ����mouseover
�йض�������mouseout�й�. 




* 
�����µ������ж���,��ʵ�����ж��ǲ��ǵ�ǰ������ǲ���IEϵ�������.���
��,��ô������û��relatedTarget������fromElement�� 





*/ 





if (!event.relatedTarget && event.fromElement ) 





event.relatedTarget = event.fromElement == event.target ? 
event.toElement : event.fromElement; 






// Calculate pageX/Y if missing and clientX/Y available 





// ���������������궨λ�й�. 




/* ��ʵ��,IE��w3c�����������ӿ�(view 
port)�Ķ�λ��˵,�Ǽ��ݵ�.�������ߵ��е��¼�����û��һ�Խ�pageX/pageY
������. 




* 
�������event�������Щ����,��Ϊ���պ�ʹ�õķ���(��ĳЩ��������ƺ���
�������).ע��,pageX/pageY˵��������¼�����ʱ 





* ���������ĵ�λ��,���ǿ��������¹�ʽ����: 



* pageX = clientX + (scrollLef -�߿���); 



* pageY = clientY + (scrollTop -�߿�߶�); 



* 





* scrollLeft�Ǵ���ˮƽ������,scrollTop�Ǵ��ڴ�ֱ������. 



* 
clientLeft���ر߿�Ŀ��clientTop���ر߿�ĸ߶�.���������ô���ǽ����
����... 




*/ 





if ( event.pageX == null && event.clientX != null ){ 





var doc = document.documentElement, body = document.body; 





event.pageX = event.clientX +(doc && doc.scrollLeft || 
body && body.scrollLeft || 0)-(doc.clientLeft || 0); 





event.pageY = event.clientY +(doc && doc.scrollTop || 
body && body.scrollTop || 0)-(doc.clientTop || 0); 





} 






// Add which for key events 





// 
���һ���ڼ����¼��зǳ����õ�����:which.ע�����������IE��w3c��׼�ж�
û�ж���. 




if (!event.which && ((event.charCode || event.charCode === 0 
)? event.charCode : event.keyCode)) 





event.which = event.charCode || event.keyCode; 






// Add metaKey to non-Mac browsers (use ctrl for PC's and 
Meta for Macs) 





// �ڷ�Macs�Ļ�����,��metaKey����crtlKey. 




if (!event.metaKey && event.ctrlKey ) 





event.metaKey = event.ctrlKey; 






// Add which for click: 1 == left; 2 == middle; 3 == right 





// Note: button is not normalized, so don't use it 





// 
COMP:ͦ���ĵ�һ������,�Ǿ�������¼���,�����Ҽ���ֵ,Ҳ����button��ֵ��
����.�����и���: 




/* browser left middle righ 





* IE 1 4 2 



* w3c0 1 2 



* 
����Կ���,��Щ��һ�µ�����ֵ�Ķ�����Ļ�����ץ��...������δ������
Ҫͳһ��Щ����: 




* 1 == left; 2 == middle; 3 == right 



* 
�����Ƕ��'?:'�������ȷ���,������Ҫ��λ����һ���о���.ֻ����᲻����
����... 




*/ 





if (!event.which && event.button ) 





//ע��������һ��'&'�����,������'&&' 




event.which =(event.button & 1 ? 1 :( event.button & 2 
? 3 :( event.button & 4 ? 2 : 0 ) )); 






return event; 
}, 

/** 



* ��fn��proxy��װ����, ��󷵻�proxy. 



* �Ӻ�����������, 
������������ý������ǽ�fn��Ψһ���(guid)����proxy���� 



* @param {Function} fn -Ԫ�صĺ���,����һ��guid 



* @param {Function} proxy -��󽫷����������, 
����ʱ��������fn��guid. һ����˵, proxy������fn��һ�����. 



*/ 


proxy: function( fn, proxy ){ 



// Set the guid of unique handler to the same of original 
handler, so it can be removed 





//ͨ�������������ȷ��proxy���к�fnһ����guid, 

�Ӷ����ܹ����Ƴ�. 




proxy.guid = fn.guid = fn.guid || proxy.guid || this.guid++; 





// So proxy can be declared as an argument 





return proxy; 
}, 

/** 



* spacial ��һ����/ֵ����,����¼����ν�� " �����¼� ". 



* "�����¼�"������,������: 



* 
��һ�������¼��������������֧�ֵ�,���������ready�¼�.Ҳ����˵��û��
��һ���������onReady�������¼�.��ʵreadyȡDOM ready֮��, ����������� 





* DOMContentLoaded�¼�,���ǲ������ռ�. 
jQueryͨ��ʹ���Դ���ready�¼���Ϊ����(delegate), 
���ݵ�ǰ�������������Դ�:(1)�����֧��DOMContentLoaded 



* �¼��������, ��ֱ�ӽ����. (2)����ǲ�֧�ָ��¼��������, 
��ͨ��ģ��ķ�ʽ��"��"�¼�. ����μ�jQuery.event.bindReady����. 



* 





* �ڶ�����"����ͬ��"���¼�,���������mouseenter��mouseleave. 
mouseenter��mouseleave��IE�¼�ģ���е�������������¼�, 
w3c��֮���Ӧ���¼������Ǹ��� 



* ��Ϥ��mouseover��mouseout. 
�������Ա�ڷ�IE�������Ҫ����¼���������mouseenter/mouseleave��
��, ��jQuery�������֮���Ӧ��w3c�¼�. 



*/ 


special:{ 



ready:{ 





/** 





* ���������ĵķ���, setupҲ��"��"֮��, ��ͬ. 



* �˺����������ready�¼�����Ӧ�����İ�. �ٴ�����, 
������в�û��ready�¼�, ready��jQuery "ԭ��"���¼�. 



*/ 





setup: function() { 





// Make sure the ready event is setup 





bindReady();//��ʵ�ǵ�����bindReady�������а�. 




return;//��������ôreturn��, ���ʱ��ķ���ֵ!== 
false, ע�Ⱑ. 




}, 






/* 





* 
ж������¼�.����ready�¼�������ͨ��"����"��;��(addEventListener/atta 
chEvent)�󶨵�, ��˵�Ȼʹ��"�ǳ�"�ķ�ʽ������ж��. 




*/ 





teardown: function() { return;} 





}, 







mouseenter:{ 





/** 





* 
�������IE��ʹ��setup��������¼�,��ʹ��setup����,��Ϊ�и�����
��ʽ(attachEvent). 




* ����ڷ�IE���������Ҫ���mouseenter�¼�, �ǲ���, 
ͳһ������mouseover�����׼���¼�. 



* 





* ע�Ȿ�����ڵ�this�ؼ��ֵ�ָ��, 
����setup��������jQuery.event.add��������ʹ�õ�: 





* if ( !jQuery.event.special[type] || 
jQuery.event.special[type].setup.call(elem) === false )//...other 
codes 



* ����, 
setup�����е�thisָ���Ǿ����������д����е�elem. 
��elem����һ����ͨ��DOM Ԫ��. 



*/ 





setup: function() { 





if ( jQuery.browser.msie ) return false; 





//���this�ؼ���ָ����һ����ͨ��DOMԪ��,Ҳ����˵����Ҫ�����Ԫ�ذ���
�������� 





jQuery(this).bind("mouseover", jQuery.event.special. 
mouseenter.handler); 





return true; 





}, 





/** 





* mouseenter�¼���ж�غ���. 



*/ 





teardown: function() { 





if ( jQuery.browser.msie ) return false; 


//�����IE������и��õ�ж�ط���,����false, 
��������teardown�ĺ�����֪��ֱ��ʹ�� 





//IE��detachEvent��ж��mouseenter 




jQuery(this).unbind("mouseover", jQuery.event.special 
.mouseenter.handler); 





return true; 





}, 






handler: function(event){ 





// If we actually just moused on to a sub-element, 
ignore it 





// ����:������ǽ������ƶ�����Ԫ�ص���Ԫ����, 
������(����������������������enter����Ԫ����). 




if ( withinElement(event, this)) return true; 






// Execute the right handlers by setting the event 
type to mouseenter 





// ��event���¼����͸�Ϊmouseenter 




event.type = "mouseenter"; 



//TODO:���thisָ������һ��ʲô����? 




return jQuery.event.handle.apply(this, arguments); 





} 





}, 






/** 





* mouseleave��ע�Ͳμ�mouseenter������ע�� 



*/ 





mouseleave:{ 






setup: function() { 





if ( jQuery.browser.msie ) return false; 





jQuery(this).bind("mouseout", jQuery.event.special. 
mouseleave.handler); 





return true; 





}, 






teardown: function() { 





if ( jQuery.browser.msie ) return false; 





jQuery(this).unbind("mouseout", jQuery.event.special. 
mouseleave.handler); 





return true; 





}, 






handler: function(event){ 





// If we actually just moused on to a sub-element, 
ignore it 





if ( withinElement(event, this)) return true; 





// Execute the right handlers by setting the event 
type to mouseleave 





event.type = "mouseleave"; 



return jQuery.event.handle.apply(this, arguments); 





} 





} 
} 
};//��ɾ�̬�¼������Ķ���. 




/* 





* 
����͸�jQuery��������¼���صķ���.��ʵ����jQuery��̬�¼������� 





* 
��װ.����¼����������ʱ,'Ļ�����'��Ҫ��Ȼ�����涨��ľ�̬����. 




*/ 



// ------------------------------------------------����� jQuery 
��������¼�����ķ��� 



/** 
* ʹ��jQuery�����extend������ΪjQuery������չ�¼�����ķ���. 
*/ 
jQuery.fn.extend({ 
/** 



* ΪjQuery�����е�ƥ��Ԫ�ؼ��ϰ��¼�������: 



* 
������¼�������unload���ǵ���jQuery�����Լ���one������Ϊƥ��Ԫ�ؼ���
�е�ÿһ��Ԫ����unload�¼��ϰ�һ��ִֻ��һ�εļ�������. 




* 





* �������,�ͱ���jQuery����ƥ��Ԫ�ؼ����ڵ�ÿһ��Ԫ��, 
��Ϊÿһ��Ԫ�ذ󶨴���������¼�������. 



* ��ע�Ȿ�����ڵ�this�ؼ��ľ��庬��,�Ƚϻ���,�뱣������... 



* 





* @param {string} type -�¼�����, ��"click","mouseenter"�� 



* @param {Array} data -��Ҫ�󶨵��¼��������ϵ�����. 
��ʱ��bind����ֻ����������, ��û�д��������Ǹ�����, 
�ǾͰ����������Ϊ������. 



* @param {Function} fn -�¼������� 



*/ 


bind: function( type, data, fn ){ 



//���this��jQuery���� 
//���Ҳ�� 





return type == "unload" ? this.one(type, data, fn): this. 
each(function(){ 





//���thisָ����ƥ��Ԫ�ؼ����ڵ�ÿһ��Ԫ�� 





jQuery.event.add( this, type, fn || data, fn && data ); 





}); 
}, 
/** 



* 
Ϊƥ��Ԫ�ؼ����е�ÿһ��Ԫ��Ϊtype��ָ�����¼��󶨸�һ���Եĺ���. 
��Щ����ֻ��ִ��һ��.��ʹ�÷���ͬjQuery.fn.bind; 




* 





* @param {string} type -�¼�����, ��"click" 



* @param {Array} data -��Ҫ�󶨵��¼��������ϵ�����. 
��ʱ��bind����ֻ����������, ��û�д��������Ǹ�����, 
�ǾͰ����������Ϊ������. 



* @param {Function} fn -�¼������� 



*/ 


one: function( type, data, fn ){ 




//proxy������Ϊ��������"��װ"��һ��guid����.������Ե�ֵ��fn��data��һ
����. proxy����Ӧ�õĳ���һ��������չ 





//�¼�������, 
���¼�������֮ǰ��֮�������һЩ����.���ﶨ����һ��one����, 
���������ǰѼ�������װ����,Ȼ���� 





//��������ִ��֮ǰ����������ӵ�ǰԪ����ж��. 




var one = jQuery.event.proxy( fn || data, function(event){ 





//ע��, thisָ���ǵ�ǰ���ڴ����ƥ��Ԫ�ؼ����е�Ԫ��. 




jQuery(this).unbind(event, one);//����ж�ؼ�������one 




return (fn || data).apply( this, arguments ); 


//Ȼ��ִ��������fn 




}); 





return this.each(function(){//��, 
Ϊƥ��Ԫ�ؼ����е�ÿһ��Ԫ�ذ󶨰�one�����������. 





jQuery.event.add( this, type, one, fn && data); 





}); 
}, 

/** 



* ΪjQuery����ж��ָ���¼������ϵ�ָ���������� 



* @param {string} type -ж�ص��¼����� 



* @param {Function} fn -��Ҫж�صĺ��������� 



*/ 


unbind: function( type, fn ){ 



return this.each(function(){ 





//thisָ����ƥ��Ԫ�ؼ����е�ÿһ��Ԫ�� 





jQuery.event.remove( this, type, fn ); 





}); 
}, 
/** 



* ��������type��ָ�����¼��ϵļ�������. 
ƥ��Ԫ�ؼ����е�ÿһ��Ԫ�ص��¼���������������. 



* @param {string} type -��Ҫ�������¼����� 



* @param {Array} data -��Ҫ�����¼����������Ĳ��� 



* @param {Function} fn -����������������֮��, 
����Ҫ��ִ�е�һЩ����. 



*/ 


trigger: function( type, data, fn ){ 



return this.each(function(){ 





jQuery.event.trigger( type, data, this, true, fn ); 





}); 
}, 
/** 



* ����������ƥ��Ԫ�ؼ��ϵ�һ��Ԫ����, 
������type��ָ�����¼��ϵļ�������. 



* @param {string} type -��Ҫ�������¼����� 



* @param {Array} data -��Ҫ�����¼����������Ĳ��� 



* @param {Function} fn -������������֮��, 
����Ҫ��ִ�е�һЩ����. 



*/ 


triggerHandler: function( type, data, fn ){ 



return this[0] && jQuery.event.trigger( type, data, this[0], 


false, fn ); 
}, 
/** 



* ����API�ĵ���ժ��: 



* ÿ�ε�������ε��ú����� 



* 


��������һ��ƥ���Ԫ�أ��򴥷�ָ���ĵ�һ�����������ٴε��ͬһԪ��ʱ
���򴥷�ָ���ĵڶ�������������и��ຯ�������ٴδ�����ֱ�����һ���� 





* ����ÿ�ε�����ظ����⼸���������ַ����á� 



* ����ʹ��unbind("click")��ɾ���� 



* 





* ��,������˵��: 



* (1) ��������Ҫ�����������ϵĺ���������Ϊ����, ����ֻ��һ��, 
��ע��; 



* (2) ��2��֮������к���ӵ�����1������һ���ĺ���ID. 



* 





* @param {Function} fn -��Ҫ�л��ĺ���, ���Դ�����Function. 



*/ 


toggle: function( fn ){ 



// Save reference to arguments for access in closure 





// ����: ����arguments������, ���������ڱհ��л��ܷ��ʵ���. 




var args = arguments, i = 1; 






// link all the functions, so any of them can unbind this 
click handler 





// ���к�����ʹ�ø���1������һ���ĺ���ID, 
����������ж��ʱͳһɾ��. 





while( i < args.length ) 





jQuery.event.proxy( fn, args[i++] ); 


//proxy��������Ϊ�ڶ����������һ�����һ������һ���ĺ���ID. 





//���click�¼��ļ�������. 
�ڼ����¼�������������args�ڵ�ÿһ������. ע�����������е�i, 
���������Ǹ������������֮�����args�ĳ�����. 




return this.click( jQuery.event.proxy( fn, function(event){ 






/* 
ע�Ȿ���������е�thisָ����ǵ�ǰ���ڴ����ƥ��Ԫ�ؼ����е���һ��Ԫ�� 
*/ 





// Figure out which function to execute 





// ����: �������Ҫ������һ������ 





this.lastToggle =( this.lastToggle || 0 )% i; 






// Make sure that clicks stop 





event.preventDefault();//ȡ���������Ĭ����Ϊ. 





// and execute the function ����:����������� 





return args[ this.lastToggle++ ].apply( this, arguments ) 
|| false; 





})); 
}, 

/** 



* �ֱ�ע�������������������������Ƴ������¼���. 



* @param {Function} fnOver 



* @param {Function} fnOut 



*/ 


hover: function(fnOver, fnOut){ 



return this.bind('mouseenter', fnOver).bind('mouseleave', 


fnOut); 
}, 
/** 



* ��ָ����һ��fn�󶨵�DOM Ready�¼�����ʱִ��. 



* 





* @param {Function} fn - ready�ļ����¼�.��DOM Readyʱ, 
�˺������ᱻ���� 



*/ 


ready: function(fn){ 



// Attach the listeners 





bindReady();//��jQuery.ready�����󶨵�DOM 
Ready(Ҳ��DOMContentLoaded)ʱִ��. 






// If the DOM is already ready 





// ������ʱ��DOM�Ѿ�ready��, ���²��˳�, 
����ִ��.��fn��Ϊdocument�ķ�������,����jQuery�Ĺ��캯����Ϊ��������,
����fn���д���. 




if ( jQuery.isReady ) 





// Execute the function immediately 





fn.call( document, jQuery ); 






// Otherwise, remember the function for later 





// ����,DOM ��ûready, 
�ǾͰ��¼�������������һ��readyList����,����DOM 
Ready�¼���ķ�����, ��ôjQuery.ready�������ᱻִ��.jQuery.ready 




// ���������readyList�еĵȴ�����, ���ִ������. 




else 





// Add the function to the wait list ����: 
���������뵽�ȴ����е��� 





/* ������һ������ֵ��˼��, 
Ϊʲô��ֱ�Ӱ�fn����readyList����, ����Ҫ��������ٰ�����һ����? 




* ������ǰ����˵��, ���� "��������" 
��������jQuery������ı�fn�ĵ����������Լ����ݲ���.ͨ����jQuery.ready
����ķ���,���Ƿ���readyList 



* 
�е�ÿһ���������ᱻ��������:"this.call(document)",ע��this�ڸû�����
                                        ָ���ǵ�ǰ���ڴ����readyList�еĺ���. ������������������





                                        * �����ͻᱻ��Ϊdocument��һ��������ִ��,
                                        ����������������������е�thisָ�ľ���document.



                                        */





                                        jQuery.readyList.push( function() {





                                            return fn.call(this, jQuery);





                                            });






                                        return this;
                                        }
                                        });

                                        //









                                        // -------------------------------------- jQuery DOM Ready�����

                                        ��̬����. ��Ҳ���¼�ģ���һ����



                                        jQuery.extend({
                                            isReady: false,// ��jQuery���isReady�������, 


                                            ������Գ�ʼΪfalse˵��DOM�ṹ��û����.ע��isReady��ʾ��ʱ����window.o
                                            nload�ǲ�һ����





// �������bindReady������ע��. 
                                            readyList: [],//�ȴ�DOM Ready�¼��ļ��������б�. 

// Handle when the DOM is ready 
                                        /**


                                         * ��DOM Ready֮��, ����������Ͼͻᱻִ��.
                                         ����������ͻ����ִ��readyList�еĺ���.
                                         readyList�к������ǰ󶨵�DOM Ready�¼��ϵĺ���.



                                         * DOM
                                         Ready���ĵ��ṹ�������,����������δ�������ʱ(��HTML�ĵ��������,
                                         ����ͼƬ������δ�������.)



                                         */


                                            ready: function() {



// Make sure that the DOM is not already loaded 





                                            if (!jQuery.isReady ){





// Remember that the DOM is ready 





                                            jQuery.isReady = true;






// If there are functions bound, to execute 





                                            if ( jQuery.readyList ){





// Execute all of them 





// ִ�����а󶨵�DOM Ready�¼��ϵĺ���, 
                                            ��Щ��������װ��readyList����.





// 
                                            jQuery.each��������readyList����ÿһ������,����document��Ϊ��Щ������
                                            �����Ķ�ִ������.




                                            jQuery.each( jQuery.readyList, function(){





// �� readyList 
                                            �����ÿһ����������Ϊdocument�ķ�������
                                            .ע��this�ؼ���ָ����readyList�е�ǰ����ִ�еļ�������





                                            this.call( document );





                                            });








                                        // Reset the list of functions





                                        // ִ����Ͼͽ� readyList ���





                                        jQuery.readyList = null;





                                        }






                                        // Trigger any bound ready events





                                        jQuery(document).triggerHandler("ready"); 



} 
} 
}); 

// 




var readyBound = false; 


//��ʼ����ʱ��,������Ϊ��û�н��¼����������󶨵�DOM Ready�¼�����. 
ֻҪbindReady�������, ��������ͻ���true, ��ʾ 





//DOM 
Ready�¼��Ѿ�ģ�����(ע��û�������֧��DOM Ready�¼�, 
�в���֧��DOMContentLoaded),����jQuery.ready�����Ѿ� 





//�󶨵����¼���. 





/** 
* ��jQuery.ready�󶨵�"DOMContentLoaded"�¼���ִ��. 
* "DOMContentLoaded"�¼�Ŀǰ��û�еõ��ռ�, 

ֻ������������Mozilla,Opera�������ʵ������¼�.����¼���ָ�ĵ���HTML

��ܴ����õ���һ��ʱ��, 
* ����˵HTML�����Ⱦ���, ����ͼƬ��û��load����֮ǰ. 
* ʹ������¼��ĺô����ĵ��ṹһ����, 

�����Ͽ���ִ��JavaScript����, �����õȵ�������ͼƬ������ϲ�ִ��, 

��ǿ���û�����. 
*/ 
function bindReady(){ 
if ( readyBound ) return; 
readyBound = true; 

// Mozilla, Opera (see further below for it) and webkit 

nightlies currently support this event 


if ( document.addEventListener && !jQuery.browser.opera) 



// Use the handy event callback 





document.addEventListener( "DOMContentLoaded", jQuery.ready, 
false ); 



/* 



* ����IE �� Safari��֧��"DOMContentLoaded"�¼�, 
�����Ҫ����Ĵ�����ģ������¼�. 



* ��Opera��Ȼ֧��, ����֧�ֵķ�ʽ�Ƚ��ر�, 
���Ҳ��Ҫ����Ĵ�������jQuery.ready������¼�. 



* 





* COMP: 

* ���´�����ʾ�˸�����������DOM 
Ready(��DOMContentLoaded)��ͬ��ʽ 





*/ 



// If IE is used and is not in a frame 
// Continually check to see if the document is ready 
/* 



* ����: �����ǰ���������IE���ҵ�ǰҳ�治��һ����ܵ���, 
�Ͳ��ϵؼ���ĵ��Ƿ�׼������. 



*/ 


if ( jQuery.browser.msie && window == top )(function(){// 


���һ��ҳ��Ĵ���һ����ܵ���(in frame), 
��ô����һ��ȫ�ֵı���topָ�� 





if (jQuery.isReady) return; 


// 
ָ�������ܵĶ����ܵ�windwo����. ���window == top ��Ϊfalse. 




try { 





// If IE is used, use the trick by Diego Perini 





// http://javascript.nwbox.com/IEContentLoaded/ 





document.documentElement.doScroll("left");// 
IE��ʹ������������DOM�Ƿ�Ready, 
����Resig��˵��,����һ��trick(����)���� 





// 
Ȥ���û��Ȥûʱ���ס��Ҳ����. 




} catch( error ){//��������˵��IE��DOMûReady, ��catch������! 




setTimeout( arguments.callee, 0 ); 


//agruments.callee��һ���������������, 
����0�������������һ���ļ��ɵ�: 





/* 
�����ӳ�0����ִ�в���������ִ��, 
���ǵ�����������������¼�������Ѿ��������ĵ�״̬֮��� 





* 
�����������.�������JavaScript Definition Guide 5th 
Edition(JavaScriptȨ��ָ�ϵ�5��)�� 





*/ 





return;//�����궨ʱ��֮��, ����. 




} 





// and execute any waiting functions 





jQuery.ready();//���״β��Ե�DOM Ready֮��, 
��������jQuery.ready����, ��jQuery.ready�����ֻ��������а󶨵�DOM 
Ready�¼��ϵĺ��� 





//��Щ���������ñ��洢��jQuery.readyList����. 
���Բο�jQuery.ready������ע��. 


})(); 

// Opera�����֧��"DOMContentLoaded"�¼�, 


�������DOMContentLoaded�¼��ǲ�����stylesheet��,�����stylesheet�ļ�
û���������,��DOM OK��, 

// OperaҲ�����ʱ��Ϊ"DOMContentLoaded". 
���ǵ�js�����п��ܻ���Ҫ��ȡstylesheet�����ֵȻ��������Ӧ�Ķ���,����
��stylesheet��ûenable 

// ֮ǰ����Щ�����ǲ���ȫ��. ���, 
����Ĵ��뽫jQuery.ready�����ٰ�װһ��, 
��ִ��jQuery.ready֮ǰȷ��stylesheet��enable��. 

if ( jQuery.browser.opera ) 



document.addEventListener( "DOMContentLoaded", function () { 



if (jQuery.isReady) return; 





//������stylesheet�ǲ���enable��.ע��,���stylesheet����link�����ĺ�
Ƕ��ʽ(<style>��ǩ����)��. 




for (var i = 0; i < document.styleSheets.length; i++) 





if (document.styleSheets[i].disabled){ 


//һ����⵽��disabled��stylesheet, 
����Ҫ����ִ�����(bindReady)������. 





setTimeout( arguments.callee, 0 );// 
����bindReady������0�����ִ��. 




return; 





} 





// and execute any waiting functions 





// ��������forѭ��˳���Ļ�, 
��û������disabled��stylesheet, �ǾͲ��ᱻreturn�ضϺ�����ִ��, 
���ʱ�����ִ��jQuery.ready��. 




jQuery.ready(); 





}, false);//false��ʾ����Ҫ���¼��Ĳ�׽�׶δ����¼�. 


// safari��֧��"DOMContentLoaded"�¼�, ������Ҫ��ȡ��ʩ��ģ��: 
if ( jQuery.browser.safari ){ 



var numStyles;//������¼�ĵ������ӵ�stylesheet����Ŀ. 
Safari�����������stylesheet�Ƿ�ȫ���������. 




(function(){ 





if (jQuery.isReady) return; 






/* 





* ����safariû��IE��"doScroll"��trick, 
��˾ͱȽ��鷳��,��Ҫͨ��readyState���ж� 



*/ 






//"loaded" �� "complete" ��������Ҫ��״̬, 
�������������״̬,������ִ��bindReady 




if ( document.readyState != "loaded" && document. 
readyState != "complete" ){ 



/* 
readyState��5��״̬(�±�ֻ��һ�ֽ���,���Կ���,���в��������Ľ���): 




* 0 = uninitializedδ��ʼ��,��û�������� 



* 1 = loading
���ڷ������� 





* 2 = loaded
���������,�Ѿ����յ�ȫ������Ӧ���� 



* 3 = interactive���ڽ�����Ӧ���� 



* 4 = complete
��Ӧ���ݽ������ 





*/ 





setTimeout( arguments.callee, 0 ); 


//�ӳ�0΢��(�������ÿ��Կ������ע��)֮��,������ִ��bindReady. 




return; 





} 






/* 





* ���������Ǹ�if, 
�����ܱ�֤����������Ҫ��"DOMContentLoaded", 
��Ϊ���ʱ��Ҳͬ�������Ÿ�Operaһ����stylesheet����δ������� 



* ��Σ��.����Ĵ������Ҫ������Σ��. 



*/ 






if ( numStyles === undefined )// һ��������ʼ����ʱ��, 
���û����, ����"undefined" 




numStyles = jQuery("style, link[rel=stylesheet]").
                                        length;// ע��,����������ѡ����





                                        if ( document.styleSheets.length != numStyles ){


//��Ŀ���Ա�ʾstylesheetû�м������, ����ִ��bindReady 




                                            setTimeout( arguments.callee, 0 );





                                            return;





                                            }





                                        // and execute any waiting functions





                                        // ����, ������������е�����, ��ôһ�о�����,
                                        ����ִ��jQuery.ready!




                                        jQuery.ready();





                                        })();
                                        }

                                        // A fallback to window.onload, that will always work
                                        // �� jQuery.ready �����󶨵�load �¼�.��������������Ƿ�֧��DOM

                                        Ready, jQuery.ready�ڵĴ������Ǳ�ִ��, �������㿩.
                                        // �������˻���, ��jQuery.ready����ִ��������?
                                        ����,��ΪjQuery.ready���������־������isReady��. ��jQuery.ready
                                        // ������ִ�й�һ��֮��, isReady��Ϊtrue��.
                                        ����μ�jQuery.ready�Ĵ���.

                                        jQuery.event.add( window, "load", jQuery.ready ); 
} 



//-------------------------------------------------------------------


-- jQuery ����Ը����¼��İ󶨺��� 



//Ϊ"blur,focus,load,resize,scroll,unload,click,dblclick..."���¼�����
һ���¼��󶨺���. 

jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick," +
                                        "mousedown,mouseup,mousemove,mouseover,mouseout,change,select," +
                                        "submit,keydown,keypress,keyup,error").split(","), function(i,


                                        name){



                                            /* 



                                             * Ϊ��˵������, 
                                             ����ע�ͽ���һ��������˵��������δ������Щʲô����. ����
                                             ���ڵ�name = 'click', ���� i=6 (i��click��split�����������е�����) 



                                             */



// Handle event binding 
// ��������ļ���, ����name = 'click', ������ɿ���, 

                                            ����Ĵ�����jQuery�����϶�����һ����"click"�ķ���. ����һ������,
                                            ���������������Ҫ��


// HTMLԪ�ر�clickʱ����Ӧ����, Ҳ����������. 
                                            ����������û�б�����click����,
                                            ��ôjQuery����ͻᴥ�����а���click�¼��ϵ����м�������.

                                            jQuery.fn[name]= function(fn){



                                            return fn ? this.bind(name, fn): this.trigger(name);
                                            };
                                        });

                                        // Checks if an event happened on an element within another element
                                        // Used in jQuery.event.special.mouseenter and mouseleave handlers
                                        /**
                                        * ���������Ƕ�Ӣ��:������mouseenter�¼���mouseleave�¼�����ʱ,

                                        ����ǲ���������·�Ԫ����, ��������������Ԫ����.

                                        * ��������� Query.event.special.mouseenter �� mouseleave
                                        ��handler�б�ʹ��.
                                        ����������жϵ���괦��Ԫ�ص���Ԫ����ʱ,handler������


                                        * ��return.

                                        * @param {Event} event -�¼�����


                                        * @param {HTMLElement} elem -��⵽���ǲ��������Ԫ������


                                        */



                                        var withinElement = function(event, elem){


// Check if mouse(over|out) are still within the same parent 
                                            element


                                            /* relatedTarget����mouseover��˵, 
                                             ��������ƶ���Ŀ��Ԫ����ʱ���뿪���Ǹ�Ԫ��; ������mouseout��˵, 
                                             �����뿪Ŀ��ʱ,��������Ǹ�Ԫ��. 




                                             * ����μ���JavaScript Definition Guide 5th Edition( 
                                             JavaScript Ȩ��ָ�� )�� 

                                             */


                                            var parent = event.relatedTarget;


// Traverse up the tree 





// 
                                            һֱ���ϲ��ҿ������ĵ�ǰ����Ԫ�صĸ��׻��������ǲ��Ǻ����ڶ���������
                                            ָ�����Ǹ�Ԫ��(elem), �Ǿ�˵������elemԪ����.

                                            while ( parent && parent != elem ) try { parent = parent.
                                            parentNode;} catch(error){ parent = elem; /* 
                                         ��������Ҳ��Ϊ�������Ԫ���� */}

                                        // Return true if we actually just moused on to a sub-element


                                        return parent == elem;



                                        };






                                        // Prevent memory leaks in IE



                                        // And prevent errors on refresh with events like mouseover in other
                                        browsers



                                        // Window isn't included so as not to unbind existing unload events 



// ����: ����IE���ڴ�й©. 


// ���ұ������������������mouseover�������¼�ˢ��ʱ�����µĴ��� 



// Window����û�а�������, 
���⽫�Ѿ�����window.unload�¼��ϵļ�������ж�ص�(��Ϊ����unload����
��window.unload����, ��ɾ����, �ǻ���ô������) 

jQuery(window).bind("unload", function() { 



//���а���document���ڵ��ĵ�Ԫ����unload�¼�����ʱж�ص����е��¼�����
����. 

jQuery("*").add(document).unbind(); 



}); 















//-------------------------------------------------------------------
��չ jQuery����ʹ����� ajax��������� ------------------------



jQuery.fn.extend({ 


// Keep a copy of the old load 


_load: jQuery.fn.load,//��ԭ���ϵ�load��������. 




/** 





* ��һ�� jQuery 
�����ü���Զ���ĵ����ҽ����ص����ݷŵ��Լ����. 
�������ʹ����jQuery �й�ajax ����ľ�̬�Ǻ��� 

* 





* @param {string} url 



* @param {Object} params 





* @param {Function} callback 



*/ 


load: function( url, params, callback ){ 



if ( typeof url != 'string' ) 



return this._load( url ); 






// ����url �����Ƿ���selector, ��selector, 
˵�������������ҳ����������ݶ�load����,ֻ����load selectorָ���Ĳ��� 





var off = url.indexOf(" "); 



// off >= 0, ˵������selector, �����������url��selector 




if ( off >= 0 ){ 





var selector = url.slice(off, url.length); 





url = url.slice(0, off); 





} 






//��֤Ҫ��һ���ص����� 





callback = callback || function(){}; 






// Default to a GET request loadȱʡʹ��GET������ȡ���� 





var type = "GET"; 




// If the second parameter was provided 





// ����ṩ�˵ڶ�������,�Ǿ͸��������������������һЩ���� 





if ( params ) 





// If it's a function





                                        // ���params�Ǻ���,
                                        �ǾͶ�load�����ĸ�����������"����"����:





                                        if ( jQuery.isFunction( params )){





// We assume that it's the callback 





                                            callback = params;





                                            params = null;






// Otherwise, build a param string 





// ����, 
                                            ʹ��jQuery.param������params����ת��Ϊһ���ַ���.������̽���"��������
                                            ��" 




                                            } else {





                                            params = jQuery.param( params );


//jQuery.param��params����ת����Ϊ�ַ���, 
                                            �Ա�load����ʹ��POST��ʽ����Щ�������䵽��������





                                            type = "POST";//����в�������, 
                                            �����Ǿ�ʹ��POST�������ݲ�������ȡ���.





                                            }






                                        var self = this;//����this������,
                                        ��Ϊ�������ĺ���������this�ĺ��彫�ᱻ�ı�.






                                        // Request the remote document





                                        //
                                        ʹ�þ�̬��ajax��������Զ�̵��ĵ�.ajax��������һ��������Ϊ����,
                                        �������Ա���ajax�������������:




                                        jQuery.ajax({





                                            url: url,//�����url�������� 





                                            type: type,//���������,GET or POST or Others 




                                            dataType: "html",// �����󵽵����ݵ���HTML������ 


                                            data: params,// ���͵��������˵Ĳ���, �������ֵ, 
                                            ��type���ᱻ��ΪPOST, ��ΪGET���������˷��ʹ�������





                                        /**





                                         * ������ɹ�ʱ�����õĺ���,
                                         ����������jQuery��"ϵͳ��"�ص�,
                                         һ�������jQuery��Ӧ�ü�����Ա(Ҳ����ʹ��jQuery�ĳ���Ա)����Ҫ��ע���
                                         ����



                                         * ����ֻ��Ҫ��ע�Լ�"Ӧ�ü�callback",
                                         ���Լ�д��callback���.



                                         *





                                         *
                                         Ҳ�������Ϊʲô�������������������������Ĳ���?�ܲ����޸�?




                                         * Ҫ������������,
                                         �����鿴OnComplete�¼��������Ĵ���,
                                         ����������complete�������ܻ�õĲ���.



                                         *





                                         * @param {Object} res -���������ص�����



                                        * @param {Object} status -��Ӧ��״̬



                                        */





                                        complete: function(res, status){





// If successful, inject the HTML into all the 
                                            matched elements





// ����: �������ɹ�, ��HTMLע�뵽����ƥ��Ԫ�ص���ȥ. 




                                            if ( status == "success" || status == "notmodified" )



// See if a selector was specified 





// �������url����ѡ����, 
                                            ��ô���������й��˳�ѡ������ָ���Ĳ���, Ȼ����ע��.
                                            ��urlΪ"info.php #news", ��������������ҳ��





// ��#news���HTMLע�뵽Ŀ��Ԫ�ص���. 




                                            self.html( selector ?





// Create a dummy div to hold the results 





// �����������������ע�뵽һ���տ�div�� 





                                            jQuery("<div/>")



// inject the contents of the document 
                                            in, removing the scripts





// to avoid any 'Permission Denied' 
                                            errors in IE





                                            /* ����: ע�������ĵ�������, 
                                             ���ͬʱȥ����scripts��ǩ������IE�е��� "Permission Denied" �Ĵ��� 





                                             */





                                            .append(res.responseText.replace(


                                            /<script(.|\s)*?\/script>/g, ""))




// Locate the specified elements 





// ����: ��λָ����Ԫ��. 
                                            ��ʵ���ǹ��˳�selector��ָ�������������Ϊselt.html�Ĳ���





                                            .find(selector):






// If not, just inject the full result 





// ���û��ָ��ѡ����, �Ǻð�, 
                                            ֱ�Ӱ�������Ϊself.html�Ĳ���,
                                            ֱ��ע�뵽ƥ��Ԫ�ؼ����е�ÿһ��Ԫ����ȥ.





                                            res.responseText );





// ��ƥ��Ԫ�ؼ����е�ÿһ��Ԫ���ϵ���callback����, 
                                            ����[res.responseText, status, res] ��Ϊ����





                                            self.each( callback,[res.responseText, status, res]
                                            );





                                            }





                                        });





                                        return this;//����jQuery���������, ������ʽ����.
                                        },


                                        /**



                                        * ���л�����.
                                        ��jQuery�����ϵ���Ҫ�����л��Ĳ�������ת��Ϊһ������"a=value1&b=value2 
&c=value3"���ַ���, ����GET(��������ʱ)����POSTʹ��.



                                        * ���Կ���, ���serialize������һ��Facade(����),
                                        ʵ����ɹ�������jQuery.param����.
                                        ������Բο�jQuery.param����������ע��.



                                        */


                                        serialize: function() {



                                            return jQuery.param(this.serializeArray());
                                            },
                                        /**



                                        *
                                        ��jQuery������ƥ��Ԫ�ؼ����е�Ԫ��ת����һ������.�����е�ÿһ��Ԫ����
                                        һ������, ÿ������Ľ������:




                                        * {name:"name",value:"value"}



                                        */


                                        serializeArray: function() {



// 
                                            map������ƥ��Ԫ�ؼ����ڵ�ÿһ��Ԫ�ص��ò����е��Ǹ��������д���,
                                                ��������������½�һ��jQuery����, ��������¶����滻ԭ����





// ��jQuery����, 
                                            ����map���������������jQuery���������, �Ӷ����㷽������ʽ����.




                                            return this.map(function(){






// 
                                            ע�����´����е�thisָ����ƥ��Ԫ�ؼ����е�ǰ���ڴ���ĵ��Ǹ�Ԫ��






// ������ǰ���Ԫ���ǲ���form, 
                                            ����Ǿͽ�form�ڵ�Ԫ��(elemsts)ʹ��jQuery.makeArrayת��Ϊ���鷵��(��Ϊ
                                            form�ڵ��ֶβ���������Ҫ��);




// ��������Ǿ�ֱ��Ԫ�ط���. 
                                            �ɼ�serializeArray�����е�map��������Ҫ�����formԪ�ص�.




                                            return jQuery.nodeName(this, "form")?



                                            jQuery.makeArray(this.elements): this;





                                            })





                                        /*





                                        * filter ����ɸѡ������������Ԫ��.��ɸѡ�������ɴ���
                                        filter�ķ���( fn )������.�������( fn ) retrun
                                        ������Ԫ�ؾ���Ҫ���˳�����Ԫ��.



                                        */





                                        .filter(function(){





// 
                                            �ѱ��е���name���Ե�,�ɼ���,���õ�,��ѡ�ϵ�,��֮��Ҫ�����������˵Ĳ�
                                            ��ȫ������. ע��������˺����ķ���ֵ��true/false, true����





// ����ǰ���ڹ��˵����Ԫ������, false�Ļ����ǲ�Ҫ. 




                                            return this.name && !this.disabled &&





                                            (this.checked || /select|textarea/i.test(this.
                                            nodeName) ||





                                            /text|hidden|password/i.test(this.type));





                                            })





                                        /*





                                        * ��ɸѡ������Ԫ�����map��һ��֮��������ϳ�һ������.
                                        ������һ�ε�map��Ҫ��HTMLԪ��ת��Ϊһ������"name"��"value"�Ķ���.



                                        */





                                        .map(function(i, elem){





// ʹ��val() 

                                            ����ȡ�õ�һ��ƥ��Ԫ�ر�ǩ�ڵ�ֵ(jQuery(this)Ҳ��һ��ƥ��Ԫ��),�е�inn
                                            erText��ζ��...




                                            var val = jQuery(this).val();





// "? :" �����������ô���, �Ƚ��������Ա���. 




                                            return val == null ? null :





                                            val.constructor == Array ?// 
                                            ���val.constructor��Array,��this����һ������Select������Ԫ��,�ܹ�ѡ��
                                            ���ֵ,����valu()�Ż᷵��Array




                                            jQuery.map( val, function(val, i){


//���val������, �Ǿͽ����������ÿһ��Ԫ��ӳ��Ϊ{name: elem.name, 
                                            value: val}.




                                        //���val
                                        ��һ������





                                        return {name: elem.name, value: val};





                                        }) :





                                        // ���val ��һ���ַ��� 





{name: elem.name, value: val};





                                        })





                                        .get();/*





                                        * get()������jQuery�����ƥ��Ԫ�ؼ���"��"����,
                                        �õ�һ������, ����������鷵��.



                                        * ����㲻ϲ������jQuery����(
                                        ��������������ѡ������ѡ�񵽵�����Ԫ�� ), ��ô����jQuery �����
                                        get ���������



                                        * ��һ����ƥ��Ԫ�ؼ�����Ԫ������ɵ�����,
                                        ������Ϳ���ֱ�Ӳ���������.



                                        */


                                        }
                                        });











                                        //


                                        ------------------------------------------------------------------��ÿ

                                        ��jQuery �����־�����ajax �����¼��ļ�������-----------------4877
                                        /*
                                        * ���´���Ϊ


                                        "ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend"


                                        ������һ���¼��󶨺���. ע����Щ�¼����Զ����¼�, �����¼�
                                        * �Ĵ�������Ҫ�Լ�����.
                                        */
                                        jQuery.each(

                                        "ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend". 


split(","), function(i,o){
                                            jQuery.fn[o]= function(f){



                                                return this.bind(o, f);
                                            };
                                        });
                                        //






                                        //-------------------------------------------------------------------


                                        ��jQuery �پ���ajax����ľ�̬���� --------------------------



                                        // ��Щ��������jQuery�����ajax����ʱ������ʹ�õĵײ㾲̬����.
                                        jQuery�����ajax����ȫ���Ƕ���Щ�����ķ�װ. ��Щ��̬����������jQuery
                                        ajax�ĺ���



                                        //-------------------------------------------------------------------


                                        var jsc = now();//jsc�����赱ǰ��ʱ��,��Ϊһ��ʱ���.

                                        jQuery.extend({
                                        /**



                                         * ʹ��GET������������



                                         * @param {string } url -�����ַ



                                        * @param {Object } data -���͵�����



                                        * @param {Function} callback -����ɹ�����Ҫִ�еĺ���



                                        * @param {string} type -������ĵ���������



                                        */


                                        get: function( url, data, callback, type ){



// shift arguments if data argument was ommited 





// 
                                            ���data��һ������������һ���ַ�����ô��Ҫ��һ��"����"�Ĳ���





                                            if ( jQuery.isFunction( data )){





                                            callback = data;





                                            data =
                                            null;





                                            }






                                        //����jQuery.ajax����





                                        return
                                        jQuery.ajax({





                                            type: "GET",//ʹ��GET������������ 


                                            url: url,//·�� 





                                            data: data,//��Ҫ���͵����� 





                                            success: callback,//�ɹ���Ӧ����Ҫִ�еĺ��� 





                                            dataType: type//������Ӧ����������, ��application/xml, 
                                            text/xml,text/html��





                                            });
                                        },

                                        /**



                                        * ʹ��GET������urlָ���ĵ�ַ����һ���ű��ļ�.



                                        * @param {string} url -�����ַ



                                        * @param {Function} callback -����ɹ�����Ҫִ�еĺ���



                                        */


                                        getScript: function( url, callback ){



                                            return jQuery.get(url, null, callback, "script");
                                            },
                                        /**



                                        * ʹ��GET������urlָ���ĵ�ַ����JSON��ʽ������



                                        * @param {string} �����ַ



                                        * @param {string} ���͵�����



                                        * @param {Function} ����ɹ�����Ҫִ�еĺ���



                                        */


                                        getJSON: function( url, data, callback ){



                                            return jQuery.get(url, data, callback, "json");


                                            },

                                        /**



                                        * ʹ��POST������urlָ���ĵ�ַ��������



                                        * @param {string } url -�����ַ



                                        * @param {Object } data -���͵�����



                                        * @param {Function} callback -����ɹ�����Ҫִ�еĺ���



                                        * @param {string} type -������ĵ���������



                                        */


                                        post: function( url, data, callback, type ){



//����data�ǲ��Ǻ���,����Ǻ����Ǿ���һЩ"����"�Ĺ���. 
                                            �е���ϲ�����ּ��ĵ��÷�ʽ.




                                                if ( jQuery.isFunction( data )){





                                            callback = data;





                                            data = {};





                                        }






                                        //���ú��ĵ�ajax����, �����ͷ�ʽ����ΪPOST




                                        return jQuery.ajax({





                                            type: "POST",



                                            url: url,





                                            data: data,





                                            success: callback,





                                            dataType: type





                                            });
                                        },
                                        /**



                                        * ��ӻ����޸�ajaxĬ�ϲ�������.



                                        * ���Կ���ʹ����extend�������ﵽ���Ŀ��.



                                        *
                                        extend�����ῴ��jQuery.ajaxSettings��û��settings�������г�������,û��
                                        �͸�������,�о���settings�������ֵ����jQuery.ajaxSettings




                                        * ���ͬ�����Ե�ֵ.



                                        * @param {Object} settings



                                        */


                                        ajaxSetup: function( settings ){



                                            jQuery.extend( jQuery.ajaxSettings, settings );
                                            },

                                        /**



                                        * ajax��Ĭ������



                                        */


                                        ajaxSettings:{



                                            url: location.href,





                                            global: true,// ���ñ�����������÷�Χ�Ƿ�Ϊȫ��. 
                                            ��ajaxStart, ajaxStop, click, blur, focus ���¼�����globalȫ���¼�.




// ����˵���ǵ�ҳ������һ��idΪ'panel'��div. 
                                            ���div��ajax������ʱ��ʾ"request sending...",��������ʾ





// "stop". ���ǿ��ܻ�д���µĴ���: 




                                            /* 





                                             * $('#panel').ajaxStart(function(){//set text 
                                             'request sending...'}).ajaxStop(function(){// set text 'stop'});



                                        *





                                        *





                                        * ������ǵ�global����Ϊfalse,
                                        ��ô��Щ�¼�����ʱ��������������Щ�¼��ϵļ�������,
                                        ��ֻ�������û��ڲ�������ʱ���趨��



                                        * callback. ��Ĭ�����֮��globalΪtrue,


                                        Ҳ����˵��������Щ�¼��ϰ󶨵��¼�������������õ�����.




                                        */





                                        type: "GET",



                                        timeout: 0,





                                        contentType: "application/x-www-form-urlencoded",



                                        processData: true,





                                        async: true,





                                        data: null,





                                        username: null,





                                        password: null,





                                        accepts:{//������������(����ܹ����յ�)��������,��MIME type 




                                            xml: "application/xml, text/xml",



                                            html: "text/html",



                                            script: "text/javascript, application/javascript",



                                            json: "application/json, text/javascript",



                                            text: "text/plain",



                                            _default: "*/*"//Ĭ�������Ϊ���е��������Ͷ��ܽ���. 


                                            }
                                        },

                                        // Last-Modified header cache for next request
                                        // ����:Ϊ��һ�����󻺴��Last-Modifiedͷ��.
                                        lastModified: {},

                                        /**


                                        * jQuery ajax�ĺ��ķ���. ���ڸ������÷���ajax����.



                                        * @param {Object} s -��������.



                                        */


                                        ajax: function( s ){



// Extend the settings, but re-extend 's' so that it can be 





// checked again later (in the test suite, specifically) 





                                            s = jQuery.extend(true, s, jQuery.extend(true, {}, jQuery.
                                        ajaxSettings, s));






                                        var jsonp, /*
                                        JSONP��һ���ǹٷ���Э��,������������˼���Script Tags���ظ��ͻ���,
                                        ͨ��JavaScript callback����ʽ��ʵ�ֿ������.




                                        * ����һ���򵥵�jQuery JSONP
                                        url������:"http://www.linhuihua.com?info=latestNews&callback=?&date=20 
09-5-15", jQuery



                                        * ʹ�������Ǹ�������ʽjsre��"=?"�ҳ���,
                                        Ȼ���滻��һ����ָ���ĺ�������. ���������������Ӧ����Ϊ[{2009_5_15,
                                            'No news today'}],



                                        * ����ָ����callback����Ϊ displayNews,
                                        ����������� "<script>displayNews([{2009_5_15, 'No news 
today'}])</script>".



                                        *





                                        *
                                        �������JSONP����Ϣ��ο�wikipedia:http://en.wikipedia.org/wiki/JSONP#
                                        JSONP. ������JSONPû����Ȥ,�����֪��





                                        * ��Ϊ����һ��ʵ��JavaScript������ʵķ�ʽ����.



                                        */





                                        jsre = /=\?(&|$)/g, // ���Ϳ����������ע��





                                        status, //�������������ж�����/��Ӧ״̬��.




                                        data, //��Ҫ���͵�����.




                                        type = s.type.toUpperCase();//HTTP����������,GET or POST





                                        // convert data if not already a string





                                        //
                                        ������ݻ�û�б�ת�����ַ���,�Ǿ͵���param������ת��Ϊ�ַ���.




                                        if ( s.data && s.processData && typeof s.data != "string" ) 



s.data = jQuery.param(s.data); 






// Handle JSONP Parameter Callbacks 





// ������������������JSON, 
��ô��Ҫ���������е�url���Ƿ���"=?"���ж����ǲ���һ�� jQuery
                                        JSONP������, Ȼ��������Ӧ�ĵ���.




                                        if ( s.dataType == "jsonp" ){



                                            if ( type == "GET" ){



                                            if (!s.url.match(jsre))//���url����һ��jQuery 
                                            JSONP��ʽ��url,�ǾͰ����url�޸ĳ�һ����������"callback=?"��url




                                            s.url += (s.url.match(/\?/)? "&" : "?")+(s.
                                            jsonp || "callback")+ "=?";



                                            } else if (!s.data || !s.data.match(jsre))


                                        //û��Ҫ���͵�data,������,����data����û��jsre������������urlģʽ,����
                                        ��Щurl��װ��Ϊ





                                        //jQuery
                                        JSONP�ĸ�ʽ.




                                        s.data =(s.data ? s.data + "&" : "")+(s.jsonp ||
                                        "callback")+ "=?";



                                        s.dataType = "json";


                                        //��dataType�Ļ�json,��Ϊjsonp���Ǳ�׼����.
                                        ���ͬʱ,��s.dataType�޸ĳ�"json"֮��, ������ܽ��������Ǹ�





                                        //if�����ִ��.




                                        }






                                        // Build temporary JSONP function





                                        // ����: ������ʱ�� JSONP ����





                                        // ������������������Ϊjson, ���������������jQuery JSONP
                                        ��ģʽ





                                        if ( s.dataType == "json" && (s.data && s.data.match(jsre) ||
                                        s.url.match(jsre)) ) {





                                            jsonp = "jsonp" + jsc++;// 
                                            jscΪ��ǰʱ��ĺ�����,����++��.����jsonp��������jQuery�Զ����JSONP��
                                            �ص�����������.����,�����Ǹ�����





// 
                                            ��Ϊ145386355672(�����������㰲�ı���ҽ��氡),��ô�������ɵ�JSONP��
                                            �õ�url���ÿ������������:




// 
                                            http://www.linhuihua.com?show=newInfo&callback=jsonp145386355672&date= 
                                            2009-5-15






// Replace the =? sequence both in the query string and 
                                            the data





// ��"=?"�滻ΪjQuery��jsonp�������涨���callback����, 
                                            ��url��ַ, ���͵Ĳ����϶���������滻.




                                            if ( s.data )





                                            s.data =(s.data + "").replace(jsre, "=" + jsonp +
                                            "$1");



                                            s.url = s.url.replace(jsre, "=" + jsonp + "$1");




// We need to make sure 





// that a JSONP style response is executed properly 





                                            s.dataType = "script";//��dataType���ո�Ϊ"script", 
                                            ����������ڽ��յ�JSONP��Ӧ(�ǲ�����һЩJS����)֮���ܹ����м��ػ�����J
                                            S����.





// Handle JSONP-style loading 





                                            /* 





                                             * ���������JSONP����Ĺ���, 
                                             ������Ҳ��url��ָ����callback������, 
                                             �������ע�͵��������������Ϊjsonp145386355672.������Ĵ���� 



                                             * ����������һ��jsonp145386355672����. 



                                             */





                                            window[ jsonp ]= function(tmp){


//tmp�Ƿ������ķ��ؽ���е����ݲ���. 




                                            data = tmp;





                                            success();//����success�¼� 





                                            complete();//����complete�¼� 





// Garbage collect �������� 





                                            window[ jsonp ]= undefined;





                                            try{ delete window[ jsonp ]; } catch(e){}


                                        //���������callback����֮��, ɾ����������,
                                        Ȼ��ȴ������������������.





                                        if ( head )// head �ĵ���<head>������





                                            head.removeChild( script );


                                            //�����������ص�JS������뵽�����, ������ͻ�������Щ����.




                                            };





                                            }






                                            //����������Ӧ������script,
                                            ������ajax����������û��ָ��cache����, �Ǿ���cacheΪfalse,
                                            ���û�����ЩJS����





                                            if ( s.dataType == "script" && s.cache == null )



                                            s.cache = false;






                                            if ( s.cache === false && type == "GET" ){



                                                var ts = now();//�¼��� 





// try replacing _= if it is there 





// url����"_="��߽�һ�����ڻ��ߺ���������ʾʱ���, 
                                                ���ur�к���"_=",��֤��������һ��ʱ���,��ô�޸�����¼�����ֵΪts��ֵ





                                                var ret = s.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + ts +
                                                "$2");



// if nothing was replaced, add timestamp to the end 





// 
                                                ����������replace�в�û�з����κεĸı�,��˵��url��û��ʱ���,
                                                �ǰ�ts���ʱ�������url�ĺ���.




                                                s.url = ret + ((ret == s.url)?(s.url.match(/\?/)? "&"
                                                : "?")+ "_=" + ts : "");



                                                }






                                            // If data is available, append data to url for get requests





                                            // ����:������ṩ���͵�����,
                                            ��������ӵ�����url�ĺ��(����ע:��Ȼ������������GET����)




                                            if ( s.data && type == "GET" ){



                                                s.url += (s.url.match(/\?/)? "&" : "?")+ s.data;




// IE likes to send both get and post data, prevent this 





// COMP: ����:IEϲ��һ����get��post������, 
                                                (��ȡ��ʩ)��ֹ������





                                                s.data = null;





                                                }






                                            // Watch for a new set of requests





                                            if ( s.global && ! jQuery.active++ )


                                            //jQuery.activeΪ0ʱ,���п������������trigger����.Ҳ����˵һ���µ���
                                            ����в���ʱ, ajaxStart




                                            jQuery.event.trigger( "ajaxStart" );//����ajaxStartʱ��,
                                            fire!





                                            // Matches an absolute URL, and saves the domain





                                            // ����: ƥ��һ�����Ե������ַ(URL), ��������������





                                            var remote = /^(?:\w+:)?\/\/([^\/?#]+)/;






                                            // If we're requesting a remote document





                                            // and trying to load JSON or Script with a GET





                                            //
                                            �Աȱ�����������������,�������ͬ,��˵����һ��Զ������,�Ǿ�ʹ����<head
                                                >�ж�̬���<script>��ǩ��������ʵ�ֿ�������





                                                    if ( s.dataType == "script" && type == "GET"



                                                    && remote.test(s.url) && remote.exec(s.url)[1] !=
                                                    location.host ){





                                                        var head = document.getElementsByTagName("head")[0];


//��ȡ<head>��ǩ������ 





                                                        var script = document.createElement("script");


//����һ��script��ǩ 





                                                        script.src = s.url;//�������script�ڵ��src����, 
                                                        ���½���script�ڵ㱻����<head>��, �����������������ַ���ؽű�





                                                        if (s.scriptCharset)//���ָ���˽ű��ı��뷽ʽ, 
                                                        �Ǿ����ñ��뷽ʽ





                                                        script.charset = s.scriptCharset;






// Handle Script loading 





                                                        if (!jsonp ){// jsonpҪ�з�undefined��ֵ, 
                                                        ����Ҫ�߱���������:(1)s.dataType������json/jsonp;(2)url�������jQuery
                                                        JSONP




// 
                                                        ��Ҫ��ʽҪ��.����������н����if����,
                                                        ˵��ajax�����������������JSONP����(�����˷�json/jsonp��dataType��url




// ��������jQuery JSONP��ʽ��Ҫ��), 
                                                        �Ǻ�, �Ѹղ�





                                                        var done = false;






// Attach handlers for all browsers 





                                                        script.onload = script.onreadystatechange = function
                                                        (){





                                                        if (!done && (!this.readyState ||





                                                        this.readyState == "loaded" || this.
                                                        readyState == "complete")){



                                                        done = true;


//��done����Ϊtrue,onreadystatechange����ٱ����þ���Ҳ���ᴥ�������s 
                                                        uccess,complete�¼���





                                                        success();//����ajax ���� success�¼� 





                                                        complete();//����ajax ����complete�¼� 





                                                        head.removeChild( script );


//��script��ǩ�Ƴ�, ��Ϊ����Ϊ��ʵ�ֿ���������ʱ�����ɵ�. 




                                                        }





                                                    };





                                                    }






                                                    head.appendChild(script);


                                                    //���½���script�ڵ���뵽<head>��ǩ��, ��������ͻ��������ű�






                                                        // We handle everything using the script element injection





                                                        //
                                                        ע������if��������:"���ʹ��GET��ʽ����һ��Զ��script�ű�".
                                                        ��ô,�������е����������Ѿ������,������������ȫ���ɼ��ػ�����JS������
                                                        ��.




                                                        // ���Է�����. ����ֵ����Ϊundeined.




                                                        return undefined;





                                                        }







                                                        /*





                                                        * ��������������ַ�ʽ�ܹ������첽��HTTP����:



                                                        * (1) iframe



                                                        * (2) script



                                                        * (3) XMLHTTPRequest



                                                        * ����iframe���ڰ�ȫ�Ե�����, һֱ����ڸ��.



                                                        *
                                                        �Ա���ע��Ϊ��,����Ĵ���ʹ����script�ķ�ʽ������һ������ű����첽��
                                                        ��;




                                                        * ����ע�Ϳ��·��Ĵ���, ��ʹ����XMLHTTPRequest����������.



                                                        */






                                                        var requestDone = false;






                                                        // Create the request object; Microsoft failed to properly





                                                        // implement the XMLHttpRequest in IE7, so we use the
                                                        ActiveXObject when it is available





                                                        /* ����: �����������;
                                                        ΢����IE7�ϲ�û����ȷ��ʵ��XMLHttpRequest,
                                                        ����(Ϊ�˰�ȫ���)��ActiveXObject���õ�ʱ����ʹ��ActiveXObject




                                                        * (������XMLHttpRequest).



                                                        *





                                                        * ��������(����)ԭ��,
                                                        jQuery����һ��XMLHTTPRequest(�³�XHR)����ķ�ʽ�ǱȽϼ򵥵�:��IEͳһ��
                                                        ��ActiveXObject, �������������ʹ��



                                                        *
                                                        XMLRequest().��ʵ�������google�����Ĵ���XHR���붼��jQuery�ĸ���,
                                                        "Microsoft.XMLHTTP"���ActiveXObject��Ϊ�����������ϰ�





                                                        * ����IE(IE5)�ϵ�XHR.
                                                        ����XHR��ActiveXObject��ʵ���и����µİ汾:



                                                        * (1) Msxml2.XMLHTTP.6.0



                                                        * (2) Msxml2.XMLHTTP.3.0



                                                        * (3) Msxml2.XMLHTTP



                                                        * (4) Microsoft.XMLHTTP



                                                        *





                                                        * ��jQuery 1.3.2��,
                                                        ��������д��뱻������ajaxSettings.xhr������,�����ܹ�����д.
                                                        ����,��jQuery 1.3.2����������jQuery��xhr����



                                                        * ����̫����ª, ����˵�����XHR������л���,
                                                        ������Լ�����ajaxSetup�������Լ�����.
                                                        ����,����һ���汾(1.2.6)��jQuery��, �������Ǿ�ֻ



                                                        * ����һֻ�۱�һֻ����.



                                                        */
                                                        //IE
                                                        //non-IE(XHR�����ڱ�׼���Ĺ�����,��Ŀǰ�����Ǳ�׼)





                                                        var xhr = window.ActiveXObject ? new ActiveXObject(
                                                        "Microsoft.XMLHTTP"): new XMLHttpRequest();






                                                        // Open the socket





                                                        // ����:��socket




                                                        /* ����Resigʦ����˵��"socket", ��Pro JavaScript Techniques
                                                        (��ͨJavaScript)���������л�Ҫ˵��





                                                        * "...open the socket(���׽���), ���Ǵ����.
                                                        ����XHR������ȫ����Ҫ���ǵ�socket��̵�ϸ��, Microsoft, Apple ��
                                                        Mozilla���ĵ�



                                                        * Ҳ��һ�ᵽ��open��socket���κι�ϵ,
                                                        ��ֻ��˵open���ڳ�ʼ��һ��׼����������'pending'״̬�е�����..."



                                                        *





                                                        * so, ��ֻ���г�һЩ��ͬ������, ������Ķ����������.



                                                        */





                                                        //





                                                        // Passing null username, generates a login popup on Opera
                                                        (#2865)





                                                        // comp: ��Opera 9.5(��������һ���汾)��,
                                                        �������ʹ��XHR������һ������, ����s.username��һ��nullֵʱ,
                                                        ������ᵯ��һ��prompt��Ҫ��





                                                        // �û���¼. ����Ϊ�˱����������,
                                                        ���Ƕ�username��������Դ�, ��username, �Ͱ�������ȥ; û�оͲ�Ҫ��,
                                                        �����Ƿ�һ��null����������.




                                                        if( s.username )





                                                        xhr.open(type, s.url, s.async, s.username, s.password);





                                                        else





                                                        xhr.open(type, s.url, s.async);






                                                        // Need an extra try/catch for cross domain requests in
                                                        Firefox 3





                                                        //
                                                        ����:��Firefox3�з��Ϳ���������Ҫһ�������try/catch��(����ע:Firefox3
                                                        ����Щ�����ܻ���������,����Ҫʹ��һ��try/catch)




                                                        try {





// Set the correct header, if data is being sent 





// �����Ҫ���͵�data�Ļ�, ��Ҫ�ú�������Щdata������ 





                                                            if ( s.data )





                                                            xhr.setRequestHeader("Content-Type", s.contentType);




// Set the If-Modified-Since header, if ifModified mode. 





// �����Ҫһ������ͷ, �Ǿ������������ͷ. 
                                                            ����ͷ����ʶ������һ������������Ļ�������.
                                                            ������������Ǳߵ�ҳ��ĸ�������Ҫ���ڹ���ͷ��





// ��ע������, �������˾ͷ������������µ�ҳ��; 
                                                            ���򷵻�304״̬: not-modified, ������Ͳ��ü���һ����ҳ��,
                                                            �������û�����.




                                                            if ( s.ifModified )





                                                            xhr.setRequestHeader("If-Modified-Since",



                                                            jQuery.lastModified[s.url] || "Thu, 01 Jan 1970 


                                                            00:00:00 GMT" ); 


// Set header so the called script knows that it's an 
                                                            XMLHttpRequest





// ����:����(��Ӧ��)ͷ��, 
                                                            ����(��������)�ű�����֪������һ��ͨ��XMLHttpRequest���͵�����.




                                                            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"
                                                            );






// Set the Accepts header for the server, depending on 


                                                            the dataType





// ���ý������ݵ�����, 
                                                            ���÷�����֪���ø��㷵��ʲô���͵�����; ���ھ�����ʲô����,
                                                            �����dataType����������.




                                                            xhr.setRequestHeader("Accept", s.dataType && s.accepts[ s
                                                            .dataType ]?





                                                            s.accepts[ s.dataType ]+ ", */*" :



                                                            s.accepts._default );// 





                                                            } catch(e){}






                                                        // Allow custom headers/mimetypes





                                                        // beforeSend���û��Լ��ڴ�������Ĳ����ж����һ������,
                                                        �����û��Ϳ�����XHR������֮ǰ��һЩ�Լ�����������, ��Ԥ����





                                                        if ( s.beforeSend && s.beforeSend(xhr, s) === false /*
                                                        ���beforedSend����false��ȡ��XHR���� */ ){




// cleanup active request counter 





// XHR����ȡ��, ��Ծ��XHR��������ȻҪ��1��. 




                                                            s.global && jQuery.active--;





// close opended socket 





// ����:�ر��Ѿ��򿪵����� 





                                                            xhr.abort();





                                                            return false;// ����false˵��ajax������ʧ��. 




                                                            }






                                                        //globalĬ����true




                                                        if ( s.global )





                                                        jQuery.event.trigger("ajaxSend",[xhr, s]);// �ð�,
                                                        һ��׼������, ���������¼�, ��������¼��ϵ��¼������������ᱻ����








                                                        /*





                                                        * XMLHTTPRequest��ʽ���첽�����Ͳ����������,
                                                        ���������Ӧ���ղ��ֵ�����:



                                                        */






                                                        // Wait for a response to come back





                                                        // ����: �ȴ����ص�����





                                                        var onreadystatechange = function(isTimeout){





// The transfer is complete and the data is available, 
                                                            or the request timed out





// ����: ������ϲ������ݿ��� 
                                                            ,
                                                            ��������ʱ���Ƕ���Ϊ�����������(requestDone = true)





                                                            if (!requestDone && xhr && (xhr.readyState == 4 ||
                                                            isTimeout == "timeout")){



                                                            requestDone = true;






// clear poll interval 





// ival�Ǽ�ʱ��������, ������������, 
                                                            ֤�������˼�ʱ��, ������ɾ͵�ȻҪ��������ʱ����,
                                                            ����,����Ͳ���������.





                                                            if (ival){





                                                            clearInterval(ival);//������� 





                                                            ival = null;





                                                            }






                                                        //��ȡ������ɺ������״̬:




                                                        // ע�� "status = isTimeout == "timeout" &&

                                                        "timeout" ||" �������ִ��˳����





                                                        // "status = (isTimeout == "timeout") && "timeout"





                                                        status = isTimeout == "timeout" && "timeout" ||



                                                        !jQuery.httpSuccess( xhr ) && "error" ||



                                                        s.ifModified && jQuery.httpNotModified( xhr, s.
                                                        url ) && "notmodified" ||



                                                        "success";




                                                        //�������ɹ��͵���jQuery.httpData�����������������������.�����Ĺ���
                                                        ���������, ������statusΪ:"parsererror"




                                                        if ( status == "success" ){



// Watch for, and catch, XML document parse errors 





                                                            try {





// process the data (runs the xml through 
                                                            httpData regardless of callback)





                                                            data = jQuery.httpData( xhr, s.dataType, s.
                                                            dataFilter );










                                                            notmodified





                                                            } catch(e){
                                                            status = "parsererror";
                                                            }
                                                        }


                                                        // Make sure that the request was successful or


                                                        if ( status == "success" ){
// Cache Last-Modified header, if ifModified mode. 
// ���������ifModifiedΪtrue, 

                                                            ˵��Ҫ����Ӧͷ���л���(�����´�������ͬurl��ʱ����Կ��������ҳ�����
                                                            �������Ƿ�����������,




// 
                                                            �Ӷ������Ƿ�����Ǹ�ҳ��).����������Ҫ��������Ҫ�������last-Modifie
                                                            d




                                                            var modRes;





                                                            try {





                                                            modRes = xhr.getResponseHeader(
                                                            "Last-Modified");



                                                            } catch(e) {} // swallow exception thrown by FF
                                                        if header is not available






                                                        if ( s.ifModified && modRes )





                                                        jQuery.lastModified[s.url]= modRes;


                                                        //�������last-Modified��ʱ��








                                                        // JSONP handles its own success callback





                                                        // JSONP ���Լ���success callback,
                                                        ����Ҫ�����������success����.





                                                        if (!jsonp )





                                                        success();





                                                        } else//�������"success"�Ǿ���Ϊ�ǳ�����,
                                                        ����jQuery.handleError����������������.




                                                        jQuery.handleError(s, xhr, status);






                                                        // Fire the complete handlers





                                                        // ����: ����complete�¼�,
                                                        ��ô��������¼����¼����������ͻᱻ����.





                                                        complete();






                                                        // Stop memory leaks





                                                        // ��xhr��Ϊnull, ��������������xhr���л���,
                                                        ��ֹ�ڴ�й©.




                                                        if ( s.async )//s.async��Ĭ�ϵ����֮����true,
                                                        ʹ���첽�ķ�ʽ��������.




                                                        xhr = null;





                                                        }





                                                        };






                                                        //������첽������, ������������, һ�β��ɹ�������һ��,
                                                        ֱ���ɹ����߳�ʱ





                                                        if ( s.async ){





// don't attach the handler to the request, just poll it 
                                                            instead





                                                            var ival = setInterval(onreadystatechange, 13);






// Timeout checker 





// ���ó�ʱ��Ĵ������ͳ�ʱ��ʱ��. 




                                                            if ( s.timeout > 0 )





                                                            setTimeout(function(){





// Check to see if the request is still happening 





// ���xhr��Ϊnull, ˵���������ڽ���, 
                                                            ȡ���������, ��Ϊ��ʱ��





                                                            if ( xhr ){





// Cancel the request 





                                                            xhr.abort();






                                                            if(!requestDone )//�������û���, 
                                                            ������,
                                                            ���ϵ���onreadystatechange������"timeout",����requestDone�ͻ�==true




                                                            onreadystatechange( "timeout" );



                                                            }





                                                        }, s.timeout);





                                                        }






                                                        /*





                                                        * ����,����...���͵�����, ��Ӧ���������������, ���Է�����.



                                                        */






                                                        // Send the data





                                                        // ���ڿ��Է���������





                                                        try {





                                                            xhr.send(s.data);





                                                            } catch(e){





//����͵���handleError���д��� 





                                                            jQuery.handleError(s, xhr, null, e);





                                                            }






                                                        // firefox 1.5 doesn't fire statechange for sync requests





                                                        // COMP:����:��firefox 1.5��,
                                                        ͬ�����󲢲��ܴ���statechange�¼�. (�ð�, �Լ���... )





                                                        if (!s.async )





                                                        onreadystatechange();//�Լ���������¼�






                                                        /**





                                                        * ����ɹ��¼��Ĵ�������





                                                        */





                                                        function success(){





// If a local callback was specified, fire it and pass 
                                                            it the data





// ����:����û��ṩ���Լ���callback����, 
                                                            �������������, �������ݴ�����





                                                            if ( s.success )





                                                            s.success( data, status );






// Fire the global callback 





// ����:����ȫ�ֵ�callback 




// 
                                                            �����������Ԫ�صĴ����¼��󶨵�������¼�(ajaxSuccess)��,
                                                            ������Щ����





                                                            if ( s.global )





                                                            jQuery.event.trigger( "ajaxSuccess",[xhr, s] );



                                                            }





                                                        /**





                                                        * ��������������¼��Ĵ�������



                                                        */





                                                        function complete(){





// Process result 





// ����û��ṩ���Լ���complete callback����, 
                                                            �������������, �������ݴ�����





                                                            if ( s.complete )





                                                            s.complete(xhr, status);






// The request was completed 





// ����ȫ�ֵ�callback, ���������󶨵�����¼��ϵĺ���. 




                                                            if ( s.global )





                                                            jQuery.event.trigger( "ajaxComplete",[xhr, s] );




// Handle the global AJAX counter 





// ���ȫ�ֵĻ�Ծ������ĿΪ0, ����ajaxStop�¼�, 
                                                            �������ϵ��¼����������õ�����.




                                                            if ( s.global && ! --jQuery.active )





                                                            jQuery.event.trigger( "ajaxStop" );



                                                            }






                                                        // return XMLHttpRequest to allow aborting the request etc.





                                                        // ����: ����xhr, �������������кܶ�,
                                                        ����˵������ʱȡ����������.





                                                        return xhr;
                                                        },

                                                        /**



                                                        * jQuery.ajax�����г��ֵĴ�������



                                                        * @param {Object} s - ajax����



                                                        * @param {XMLHTTPRequest} xhr



                                                        * @param {string} status - ajax����״̬, ��success, timout��



                                                        * @param {Object} e -�������ʱ, JavaScript�������׳��Ĵ������



                                                        */


                                                        handleError: function( s, xhr, status, e ){



// If a local callback was specified, fire it 





// ����û����ṩ������ʱ���Ե��õĻص�����, �Ǿ͵������� 





                                                            if ( s.error ) s.error( xhr, status, e );






// Fire the global callback 





// ���ajax������ȫ�ֵ�, ����ajaxError�¼�. 




                                                            if ( s.global )





                                                            jQuery.event.trigger( "ajaxError",[xhr, s, e] );
                                                            },

                                                        // Counter for holding the number of active queries
                                                        active: 0,//��Ծ��������, �Դ������������ж��ٸ�����ȴ����ͳ�ȥ.

                                                        // Determines if an XMLHttpRequest was successful or not
                                                        /**


                                                        * ����: �жϵ�ǰ��������Ƿ��ǳɹ���.



                                                        * @param {XMLHTTPRequest} xhr



                                                        */


                                                        httpSuccess: function( xhr ){



                                                            try {





// IE error sometimes returns 1223 when it should be 204 
                                                            so treat it as success, see #1450





// IE��һ������, �Ǿ�����ʱ��Ӧ�÷���204(No 
                                                            Content)������ȴ����1223, �ð�, ���������Ҳ����������ɹ�





// ��ϸ�뿴����:http://dev.jquery.com/ticket/1450, 
                                                            �ƺ�Ҳû�кܺõؽ���������.




                                                            return !xhr.status && location.protocol == "file:" ||


//��������ļ���, û��statusҲ�ǳɹ�������,�����������true; 




                                                            ( xhr.status >= 200 && xhr.status < 300 ) || xhr.
                                                            status == 304 || xhr.status == 1223 ||//�����г��˿�����Ϊ�ǳɹ��� 





//safari���ĵ�û���޸�ʱ(304)�õ���status�����undefined, 
                                                            ���԰��������Ҳ�����ǳɹ�
//�����״̬��. 




                                                            jQuery.browser.safari && xhr.status == undefined;





                                                            } catch(e){}





                                                        return false;//���뻹�����е�������, ֤�������ʧ����.
                                                        },

                                                        // Determines if an XMLHttpRequest returns NotModified
                                                        /**


                                                        * �ж���������ķ�������Ӧ�ǲ���"NotModified".



                                                        * @param {XMLHTTPRequest} xhr



                                                        * @param {string} url



                                                        */


                                                        httpNotModified: function( xhr, url ){



                                                            try {





                                                            var xhrRes = xhr.getResponseHeader("Last-Modified");




// Firefox always returns 200. check Last-Modified date 





// ����: Firefox ���Ƿ���200. 
                                                            ���ǶԱ�һ��Last-Modified����������һЩ.





                                                            return xhr.status == 304 || xhrRes == jQuery.lastModified
                                                            [url] ||





                                                            jQuery.browser.safari && xhr.status == undefined;// 
                                                            safari���ĵ�û���޸�ʱ(304)�õ���status�����undefined




                                                            } catch(e){}





                                                        return false;//���뻹�����е�������,
                                                        ֤����Ĳ���"NotModified".


                                                        },
                                                        /**



                                                        *
                                                        ��ȡXMLHTTPRequest����Ӧ����.���������ʹ���Զ���ĺ�������Ԥ����.����


                                                        ���û��ṩ���������Ͷ���Ӧ��������ͬ�Ĵ���. ������ݷ���.




                                                        * @param {XMLHTTPRequest} xhr



                                                        * @param {String} type -��Ӧ��������������,��json,xml��.
                                                        ����MIME type



                                                        * @param {Function} filter -Ԥ������



                                                        */


                                                        httpData: function( xhr, type, filter ){



                                                            var ct = xhr.getResponseHeader("content-type"),



                                                            xml = type == "xml" || !type && ct && ct.indexOf("xml")
                                                            >= 0,





                                                            data = xml ? xhr.responseXML : xhr.responseText;// 
                                                            �����Ӧ����XML��ͳһ�����鵱����ͨ�ı�.�����ٸ����û��ṩ����������,
                                                            ����





// 
                                                            ��ת����Ϊ��Ӧ����������.





//��������Ƚϸ�Ц: ������������Ӧ�����ʱ��, 
                                                            �з������᷵��һ��XML�ĵ��������������.
                                                            ��ô���������֮�����ǵ�Ȼ������Ϊ�������ɹ���,�׳�һ������





                                                            if ( xml && data.documentElement.tagName == "parsererror" )



                                                            throw "parsererror";




// Allow a pre-filtering function to sanitize the response 





// ����: ����һ��Ԥ���˺�������Ӧ���ݽ���"����"... 




                                                            if( filter )//������ṩһ�����˺���, 
                                                            �Ǿ͵���������˺������ȶ���Ӧ�����ݽ���Ԥ����





                                                            data = filter( data, type );






// If the type is "script", eval it in global context 





// ����: ���������script, ��ô��ȫ�ֵ������Ļ����������� 





                                                            if ( type == "script" )



                                                            jQuery.globalEval( data );






// Get the JavaScript object, if JSON is used. 





// ����: ����������json����, ��eval��ȡJavaScript object 




                                                            if ( type == "json" )



                                                            data = eval("(" + data + ")");




                                                            return data;//�ѻ�õ����ݷ��� 
                                                            },

                                                        // Serialize an array of form elements or a set of
                                                        // key/values into a query string
                                                        //
                                                        //
                                                        /**


                                                        * ���л�һ��װ�ű�Ԫ�ص����������һ����ֵ�Եļ���
                                                        .
                                                        ������һ�����л�������:{'name':'auscar','university':'SYSU'}���л�֮��
                                                        ��Ϊһ����



                                                        * ����:"name=auscar&university:SYSU".



                                                        * @param {Object} a -��Ҫ���л��Ķ���



                                                        */


                                                        param: function( a ){



                                                            var s = [];//���ս���� 






// If an array was passed in, assume that it is an array 





// of form elements 





// ����: ���һ�����鴫������, 

                                                            �Ǿͼ�������һ���б�Ԫ����ɵ�����.


                                                            if ( a.constructor == Array || a.jquery )


//�������������(jQuery�������һ��������)����Ҫ����: 

// Serialize the form elements ����: ���л����Ԫ�� 



                                                            jQuery.each( a, function(){


//�Լ����ͼ�ֵ���б����ʹ�������ս����, 
                                                            ��󷵻�ǰ����"&"���Ž�������������.


                                                            s.push( encodeURIComponent(this.name)+ "=" +
                                                            encodeURIComponent( this.value ) );



                                                            });






                                                        // Otherwise, assume that it's an object of key/value pairs


                                                        // �����������, �Ǿͼ�������һ���ɼ�/ֵ����ɵĶ���.


                                                        else



                                                        // Serialize the key/values


                                                        // ����: ���л���/ֵ



                                                        for ( var j in a )



                                                        // If the value is an array then the key names need
                                                        to be repeated


                                                        if ( a[j] && a[j].constructor == Array )//
                                                        �����/ֵ���ֵ��һ������, ��ô��Ҫ�ٱ����������,

                                                        Ȼ�����ͬ��������һ�����ַ�


                                                        // ��ƴ��.


                                                        jQuery.each( a[j], function(){


// 
                                                            ������Ĵ�����Կ�������{favourite:['JavaScript', 'tennis',

                                                            'guitar']}�Ķ���ᱻת����:


                                                        //
                                                        "favourite=JavaScript&favourite=tennis&favourite=guitar"



                                                        s.push( encodeURIComponent(j)+ "=" +
                                                        encodeURIComponent( this ) );



                                                        });



                                                        else


                                                        //��������Կ���, ��/ֵ�е�ֵ��������һ��Function


                                                        s.push( encodeURIComponent(j)+ "=" +
                                                        encodeURIComponent( jQuery.isFunction(a[j]) ? a[j]() : a[j] ) );








                                                        // Return the resulting serialization



                                                        return s.join("&").replace(/%20/g, "+");


                                                        //��󷵻ش��л�����ַ������.

                                                        }

                                                        });
                                                        //-------------------------------------------------------------------





















                                                        //-----------------------------------------------------------------------------
                                                        ��jQuery ������ӻ�����������------------------------------



                                                        jQuery.fn.extend({


                                                        /**





                                                         * ��speed��ָʾ���ٶ���ʾjQuery����ƥ��Ԫ�ؼ����еĶ�ӦԪ��.



                                                         * ������������޲ε���ʽ����,


                                                         ��ôjQuery�����е�ƥ��Ԫ�ؼ��������ص�Ԫ�ؾͻᱻ"һ����"��ʾ����,
                                                         û�н���Ĺ���.




                                                         * @param {Object} speed -��ʾ���ٶ�,
                                                        Ҳ����˵��ʾԪ�صĹ��̳����೤ʱ��.
                                                        ������NumberҲ������"slow","normal","default"����֮һ.



                                                        * @param {Function} callback



                                                        */


                                                        show: function(speed,callback){



//����ṩ��speed����,��ʹ��animate�������ñ���show������ʱ�䳤��,Ȼ��
                                                            �ٽ��ж���





                                                            return speed ?





                                                            this.animate({





                                                            height: "show", width: "show", opacity: "show"



                                                            }, speed, callback):






                                                        //���û�д���speed, Ҳ����˵�����ε���show,
                                                        �Ǿ������еĴ���"hidden"��ʽ��Ԫ�ض�show����.




                                                        this.filter(":hidden").each(function(){



                                                            this.style.display = this.oldblock || "";




//��������һ��ĸ�ֵ֮��, 
                                                            ���this(thisָ�����һ��HTMLԪ��)��oldblockΪnone,
                                                            �Ǿ͸�����һ����none��ֵ. ��, ������





//ʲôֵ��? ����Ҫ����һ���������ȷ��, 
                                                            ����������ȷ���Ĺ���:





                                                            if ( jQuery.css(this,"display") == "none" ){




//�ð�, ��Ȼ����none, 
                                                            ���ҾͿ���Ԫ�������ı�ǩĬ����ʹ��ʲôdisplayֵ��.
                                                            �����½�һ����Ԫ�صı�ǩ��һ������ʱԪ��,





//���������뵽body����. 




                                                            var elem = jQuery("<" + this.tagName + " />").


                                                            appendTo("body");




// 
                                                            Ȼ��Ϳ�������Ԫ�ص�display��Ĭ�����֮����ʲô����ֵ,
                                                            �������Ĭ��ֵ����this.style.display





                                                            this.style.display = elem.css("display");




// handle an edge condition where css is - div { 
                                                            display:none; } or similar





                                                        // ��ѽ, �������none, ����, ������Ҫ��block




                                                        if (this.style.display == "none")



                                                        this.style.display = "block";



                                                        elem.remove();//OK,
                                                        �ڻ�ȡԪ�ص�displayĬ������ֵ֮��, �������ʱ��Ԫ��ɾ��.




                                                        }





                                                        })





                                                        .end();//
                                                        ��Ϊfilter������jQuery�����ƥ��Ԫ�ؼ��ϲ�����"�ƻ���"��Ӱ��,���ı���j
                                                        Query�����ƥ��Ԫ�ؼ��ϵ�����. �����Ҫ





                                                        //
                                                        ʹ��jQuery.fn.end������ƥ��Ԫ�ؼ��ϻָ���filter֮ǰ��״̬.

                                                        },
                                                        /**



                                                        * ����˼��, ��jQuery����ƥ��Ԫ�ؼ����е�Ԫ����������.



                                                        * @param {Object} speed -��ʾ���ٶ�,


                                                        Ҳ����˵��ʾԪ�صĹ��̳����೤ʱ��.
                                                        ������NumberҲ������"slow","normal","default"����֮һ.





                                                        * @param {Object} callback -���ض������֮����Ҫִ�еĺ���.



                                                        */


                                                        hide: function(speed,callback){



                                                            return speed ?





// ���������speed ����, �ǾͰ���speed���ٶ�Ҫ��, 
                                                            �����������صĹ���.




                                                            this.animate({





                                                            height: "hide", width: "hide", opacity: "hide"



                                                            }, speed, callback):






                                                        this.filter(":visible").each(function(){



                                                            this.oldblock = this.oldblock || jQuery.css(this,
                                                                "display");// ����Ԫ�ص�ǰ��blcok����, ����Ҫ�ٴ���ʾʱ���� 


// ���������û�ȥ. 




                                                            this.style.display = "none";// ��Ԫ����������, 

                                                            û���κεĽ���Ч��.




                                                            })





                                                        .end();//
                                                        ��Ϊfilter������jQuery�����ƥ��Ԫ�ؼ��ϲ�����"�ƻ���"��Ӱ��,���ı���j
                                                        Query�����ƥ��Ԫ�ؼ��ϵ�����. �����Ҫ





                                                        //
                                                        ʹ��jQuery.fn.end������ƥ��Ԫ�ؼ��ϻָ���filter֮ǰ��״̬.

                                                        },

                                                        // Save the old toggle function
                                                        // ����: ����ɵ�toggle����.
                                                        // �ɵ�toggle�������Խ������������ĺ�����Ϊ����.


                                                        ��toggle���������þ����ڴ���ĺ���֮��������������. ��ϸ���,

                                                        ��ο�jQuery.fn.toggle
                                                        // ������ע��.
                                                        _toggle: jQuery.fn.toggle,

                                                        /**


                                                        * �������ֻ������������: fn �� fh2;



                                                        *
                                                        toggle���������þ�����fn��fn2֮���л�����(���fn��fn2���Ǻ����Ļ�).




                                                        * ���fn��fn2����������,
                                                        ��ô�Ͱ�fn������animate������speed����,
                                                        ��fn2������animate������easing����, Ȼ�����animate�������ж���.



                                                        * ���fn��fn2��Ϊundefined, ��toggle���������޲ε���ʽ����,
                                                        ����jQuery�����ƥ��Ԫ�ؼ�����Ԫ����show��hide����״̬���л�.



                                                        * @param {Object} fn



                                                        * @param {Object} fn2



                                                        */


                                                        toggle: function( fn, fn2 ){



//���fn��fn2���Ǻ����Ļ�, �ǵ��þɵ�toggle����, 
                                                            ��fn��fn2֮���л��ŵ���.




                                                                return jQuery.isFunction(fn) && jQuery.isFunction(fn2)?





                                                            this._toggle.apply( this, arguments ):






// ������������Ǻ���, ����fn�Ƿ���ֵ. 
                                                            ����Ҫ���ж�toggle�����Ƿ��������޲ε���ʽ����





                                                            fn ?





                                                            this.animate({//�в��������, 
                                                            ���fn������animate������speed����,


                                                            ��fn2������animate������easing����, Ȼ�����animate�������ж���





                                                            height: "toggle", width: "toggle", opacity:
                                                            "toggle"



                                                            }, fn, fn2):






                                                        this.each(function(){//�޲ε����, 
                                                            ����jQuery�����ƥ��Ԫ�ؼ�����Ԫ����show��hide����״̬���л�.




                                                                jQuery(this)[ jQuery(this).is(":hidden")? "show"
                                                                : "hide" ]();



                                                            });
                                                        },

                                                        /**



                                                        * ��ƥ��Ԫ�ؼ����е�Ԫ����һ��"�����ų���"��Ч������



                                                        * @param {Object} speed -
                                                        ����Ԥ���ٶȵ�֮һ���ַ���("slow","def","fast").



                                                        * @param {Function} callback -�������ʱ����Ҫ���õĺ���.



                                                        */


                                                        slideDown: function(speed,callback){



                                                            return this.animate({height: "show"}, speed, callback);
                                                        },

                                                        /**



                                                        * ��ƥ��Ԫ�ؼ����е�Ԫ����һ��"������"��Ч����ʧ



                                                        * @param {Object} speed -
                                                        ����Ԥ���ٶȵ�֮һ���ַ���("slow","def","fast").



                                                        * @param {Function} callback -�������ʱ����Ҫ���õĺ���.



                                                        */


                                                        slideUp: function(speed,callback){



                                                            return this.animate({height: "hide"}, speed, callback);
                                                        },

                                                        /**



                                                        * ��ƥ��Ԫ�ؼ����е�Ԫ�����ԭ����slideUp�����ھ�slideDown,
                                                        ԭ����slideDown��, ������slideUp.



                                                        * @param {Object} speed -
                                                        ����Ԥ���ٶȵ�֮һ���ַ���("slow","def","fast").



                                                        * @param {Function} callback -�������ʱ����Ҫ���õĺ���.



                                                        */


                                                        slideToggle: function(speed, callback){



                                                            return this.animate({height: "toggle"}, speed, callback);
                                                        },

                                                        /**



                                                        * ����



                                                        * @param {Object} speed -
                                                        ����Ԥ���ٶȵ�֮һ���ַ���("slow","def","fast").



                                                        * @param {Function} callback -�������ʱ����Ҫ���õĺ���.



                                                        */


                                                        fadeIn: function(speed, callback){



                                                            return this.animate({opacity: "show"}, speed, callback);
                                                        },

                                                        /**



                                                        * ����



                                                        * @param {Object} speed -
                                                        ����Ԥ���ٶȵ�֮һ���ַ���("slow","def","fast").



                                                        * @param {Function} callback -�������ʱ����Ҫ���õĺ���.





                                                        */


                                                        fadeOut: function(speed, callback){



                                                            return this.animate({opacity: "hide"}, speed, callback);
                                                        },

                                                        /**



                                                        * ��ƥ��Ԫ�ؼ����е�Ԫ�ص�͸�����Զ�������ʽ��ʾ��to��ָ����ֵ.



                                                        * @param {Object} speed -
                                                        ����Ԥ���ٶȵ�֮һ���ַ���("slow","def","fast").



                                                        * @param {Object} to - opacity�仯��to��ָ����ֵ.



                                                        * @param {Function} callback -�������ʱ����Ҫ���õĺ���.



                                                        */


                                                        fadeTo: function(speed,to,callback){



                                                            return this.animate({opacity: to}, speed, callback);
                                                        },


                                                        /**



                                                        *���ڴ����Զ��嶯���ĺ�����



                                                        *
                                                        ��������Ĺؼ�����ָ��������ʽ�������ʽ���Զ���(����prop)�����������
                                                        ÿ�����Զ���ʾһ�����Ա仯����ʽ���ԣ���"height"��"top"��"opacity"����





                                                        *


                                                        ע�⣺����ָ�������Ա�����������ʽ��������marginLeft����margin-left.
                                                        *


                                                        *


                                                        ��ÿ�����Ե�ֵ��ʾ�����ʽ���Ե�����ʱ���������������һ����ֵ����ʽ��
                                                        �Ծͻ�ӵ�ǰ��ֵ���䵽ָ����ֵ�����ʹ�õ���"hide"��"show"




                                                        *��"toggle"�������ַ���ֵ�����Ϊ�����Ե���Ĭ�ϵĶ�����ʽ��



                                                        * @param {Object} prop -һ������,
                                                        �������˵��������ʱ����������Ӧ�����ֵ�һ����ʽ����Щ��ʽ����ֵ.



                                                        * @param {string} speed -
                                                        ����Ԥ���ٶȵ�֮һ���ַ���("slow","def","fast").



                                                        * @param {Object} easing -��������Ч��,
                                                        ĿǰjQueryֻ�ṩ"liner"��"swing"����Ч��.
                                                        ����jQueryҲ֧�ֵ������Ķ���Ч��, ������Ҫ���֧��.



                                                        * @param {Function} callback -�������ʱ����Ҫ���õĺ���.



                                                        */


                                                        animate: function( prop, speed, easing, callback ){



//��speed, easing, 
                                                            callback��������ʹ��speed������ϵ�һ��������,
                                                                ���������jQueury.speed����. speed��ϸ����鿴jQuery.speed������ע��





                                                            var optall = jQuery.speed(speed, easing, callback);







// ִ�� each ���� queue���� 





//���this ָ����һ��jQuery ���� 





                                                            return this[ optall.queue === false ? "each" : "queue" ](
                                                            function(){





//���this ָ����һ����ͨ��DOMԪ�� 





                                                            if ( this.nodeType != 1)





                                                            return false;






                                                            var opt = jQuery.extend({}, optall), //����optall




                                                        p,





                                                        hidden = jQuery(this).
                                                        is(":hidden"),



                                                        self = this;


                                                        //���this ָ����һ����ͨ��DOMԪ��







                                                        // ��animate�����ĵ�һ������( ����һ���б�
                                                        )�ڵļ�����������Խ��д���





                                                        // ��Щ������:hide, show, height, width




                                                        for ( p in prop ){





// ���� hide����,��,hidden��, �ٿ���show 
                                                            ����,Ҳshow( !hidden) ��,�����Ѿ�����˶���,����ִ��complete��





                                                            if ( prop[p] == "hide" && hidden || prop[p] == "show"
                                                            && !hidden )





                                                            return opt.complete.call(this);


//���complete����ִ�д�������callback, 
                                                            �����ڴ�֮ǰ�������һЩ�������






// ���Ҫ���ж�����������height������width 




                                                            if ( p == "height" || p == "width" ){



// Store display property 





                                                            opt.display = jQuery.css(this, "display");




// Make sure that nothing sneaks out 





                                                            opt.overflow = this.style.overflow;





                                                            }





                                                        }






                                                        if ( opt.overflow != null )





                                                        this.style.overflow = "hidden";




                                                        //curAnim װ�����û�������ЩҪ���ж���������





                                                        opt.curAnim = jQuery.extend({}, prop);






                                                        // ��ʼ��prop �������õ�ÿһ�����Խ��ж�����





                                                        jQuery.each( prop, function(name, val){






// �½�һ�� fx ��������, name ��prop ����� 
                                                            /ֵ��
                                                            " �� " ( ˫���ű�ʾǿ��... )




// ע��,��һ����self��һ��HTMLԪ�ص����� 





// �ڶ������������Զ������Ե����ü���,���������� 
                                                            "complete","duration","easing"֮�������.����һ�����Եļ���curAnim,��
                                                            ��װ���û����õ�����ֵ





// 
                                                            ���������������û����õ����Լ����е�һ�����Ե�����,
                                                            ��ʾ������ҪΪ��������½�һ��fx��������





// 
                                                            ������Ϊÿһ��Ҫ���ж��������Զ��½���һ��fx����





                                                            var e = new jQuery.fx( self, opt, name );


//Ϊ��ǰname��ָ���������½�һ����������. 





// �����ɲ����Ե��û����Ķ������� 





                                                            if ( /toggle|show|hide/.test(val))





                                                            e[ val == "toggle" ? hidden ? "show" : "hide" :
                                                            val ]( prop );//������Ծ�ֱ�ӵ�����Щ�����Ķ�������. 





// ��������Ҫ���û����������� 





                                                            else {





// ��������ֵ�ǲ������� " left:+50px " ,�� 
                                                            jQuery 1.2 �У������ͨ��������ֵǰ��ָ�� "+=" �� "-="
                                                            ����Ԫ��������˶�





                                                            var parts = val.toString().match(
                                                            /^([+-]=)?([\d+-.]+)(.*)$/),





                                                            start = e.cur(true) || 0;


//ʹ��jQuery.fx�����cur��ȡ��ǰԪ�ص���ʽ. ע��cur�Ĳ���Ϊtrue, 
                                                            ���ʾֱ�ӻ�ȡ





//Ԫ�ص�������ʽ. 





// ���parts 
                                                            ����null,˵��Ҫ������,ע��match����ֵ����boolean ����, ����һ������
                                                            .��������װ����match�����ַ���,�±���





// ������ʽ�ڵķ���ž��� 





                                                            if ( parts ){





                                                            var end = parseFloat(parts[2]),


//��ʽ��������ֵ 





                                                            unit = parts[3] || "px";


//���û���ṩ��λ��ʹ��"px"��ΪĬ�ϵ�λ 






// We need to compute starting value 





// ����: ������Ҫ�������ʼֵ 





                                                            if ( unit != "px" ){



                                                            self.style[ name ]=(end || 1)+ unit;





                                                            start = ((end || 1)/ e.cur(true)) *
                                                            start;





                                                            self.style[ name ]= start + unit;





                                                            }






                                                        // If a +=/-= token was provided, we're
                                                        doing a relative animation





                                                        // ���val�к���"+=/-=", ��ô����һ����Զ���.




                                                        if ( parts[1])





                                                        end = ((parts[1] == "-=" ?-1 : 1)* end)


                                                        + start;//��������յ���ʽֵ.




                                                        e.custom( start, end, unit );


                                                        //����jQuery.fx�����custom��������һ������.




                                                        }





                                                        // ���� left:+=5px��������,����left:5px��������





                                                        else





                                                        e.custom( start, val, "" );



                                                        }





                                                        });






                                                        // For JS strict compliance





                                                        return true;





                                                        });
                                                        },
                                                        /**



                                                        * ������2:



                                                        * (1) ��ȡƥ��Ԫ�ؼ�������Ԫ�صĶ�������;



                                                        * (2) ����ƥ��Ԫ�ؼ�����ÿһ��Ԫ�صĶ�������.
                                                        �������������е��滻, �ֿ����ǽ�����ĳ���������뵽���е�β��.



                                                        * @param {string} type -����������. һ����"fx".
                                                        ��ӵ����������չ������������, ���ֵ�����б�.



                                                        * @param {Function or Array} fn -�����Function,
                                                        �ǾͰ�Function���뵽ÿ��ƥ��Ԫ�صĶ������е�β��; �����Array�Ǿ���fn



                                                        *


                                                        �滻ÿ��ƥ��Ԫ�صĶ�������.




                                                        */


                                                        queue: function(type, fn){





// ���type��һ��Function, ���� 
                                                            type����function����һ������,�Ǿ�Ҫ����һЩ������" ���� "����





                                                            if ( jQuery.isFunction(type) || ( type && type.constructor ==
                                                            Array )) {





                                                            fn = type;// �õڶ�������fn��Ȼ��function, 
                                                            ��������ĳ����߼��Ͳ����޸�





                                                            type = "fx";// ����������Ϊfx. 


                                                            }






                                                        // ���û�д���type, ���ߴ�����type( ����һ��string
                                                        ),��û�еڶ�������,
                                                        ��ô˵��queue�����ĵ���������ƥ��Ԫ�ؼ�������Ԫ�صĶ���





                                                        // ����. OK, ���ظ���/��.




                                                        if (!type || (typeof type == "string" && !fn))



                                                        // ����׸�ƥ��Ԫ�صĶ�������. this
                                                        ��һ��jQuery����,�����кö��ƥ��Ԫ��(
                                                        ��Щƥ��Ԫ�ض���ͨ��selectorƥ����� ).��ô���queue�������ص�





                                                        // ���ǵ�һ��ƥ��Ԫ��this[ 0 ]�Ķ�������.




                                                        return queue( this[0], type );






                                                        // ������������е�����,˵��Ҫ���ö������е�ֵ. ע�� "
                                                        return this.each(...) "��" this " ��һ�� jQuery������,�������" this
                                                        " ����һ�������





                                                        // ƥ��Ԫ�ص�����.




                                                        return this.each(function(){





// �������һ���������( fn��һ������ 
                                                            ),��˼��Ҫ������������Ԫ��ԭ�����Ǹ�,��Ϊ�µĶ�����������





                                                            if ( fn.constructor == Array )





                                                            queue(this, type, fn);//�����¶��� 






// 
                                                            ��������Ǵ���һ������������,�Ͱ��������׷�ӵ�����������������





                                                            else {





                                                            queue(this, type).push( fn );






// ���Ԫ��ԭ����û�ж���,��������( length == 1 ), 
                                                            ���������ж���





                                                            if ( queue(this, type).length == 1 )





                                                            fn.call(this);





                                                            }





                                                        });
                                                        },

                                                        /**



                                                        *





                                                        * @param {Object} clearQueue



                                                        * @param {Object} gotoEnd



                                                        */


                                                        stop: function(clearQueue, gotoEnd){



                                                            var timers = jQuery.timers;






// ���jQeury������ÿһ��Ԫ���ϵĶ�����������. 
                                                            ע��,ÿһ��jQuery����������ɵ�Ԫ��,��ÿһԪ�ض�����һ��������������





// ��Ҫֵ��ע�����,��ʹ��ɾ����Ԫ���ϵĶ�������, 
                                                            ����˵���������ϵ�ĳЩ���������Ѿ������ִ�ж���( jQuery.timers
                                                            ),���ڵȴ�ִ��.




                                                            if (clearQueue)





                                                            this.queue([]);


//��ƥ��Ԫ�ؼ����е�ÿһ��Ԫ�صĶ��������ÿ� 






                                                            this.each(function(){





// go in reverse order so anything added to the queue 
                                                            during the loop is ignored





// ��������������,�Ӷ���β����ʼɾ������this�Ķ�������, 
                                                            �Է�ֹ����������е�this�Ķ���������ִ��-------> ����һ��������.




                                                            for ( var i = timers.length -1; i >= 0; i--)





                                                            if ( timers[i].elem == this ){


//��ִ�ж����з��������ڵ�ǰԪ�صĶ���, ɾ���������. 




                                                            if (gotoEnd)





// force the next step to be the last ����: 
                                                            ����һ����Ϊ���...




// 
                                                            ����ִ�ж���������this�����һ����������(��Ϊ�����ǴӶ��е�β����ʼɾ
                                                            ��this�Ķ���������), �������ϵ�ֹͣ��





// ִ�ж��е����һ������this�Ķ���������. 




// 
                                                            ������true����������,���true���ջύ��step()����,��Ϊ�����������





// step ���յ�true, 
                                                            ���Ͻ��������ó�Ϊĩβ״̬.
                                                            �����������ս����Ƴ����ж���:timers.splice(i, 1);





// ����ϸ�ο�jQuery.fx.step������ע��. 




                                                            timers[i](true);





                                                            timers.splice(i, 1);





                                                            }





                                                        });






                                                        // start the next in the queue if the last step wasn't forced





                                                        if (!gotoEnd)//���û��ǿ��Ҫ��ֹͣ,
                                                        �Ǿ���ƥ��Ԫ�صĶ������г���(���ݽṹ����,��ɾ������ͷ�����Ǹ�Ԫ��),
                                                        �����������ܼ�������.




                                                        this.dequeue();






                                                        return this;
                                                        }

                                                        });


                                                        //-----------------------------------------------


                                                        ��������������jQuery�����������Լ��Ķ�������


                                                        /**


                                                        *
                                                        jQuery�ڲ�ʹ�õ�queue����,���⹫����queue����ʵ������ʹ�������������
                                                        ��������.

                                                        * ����������ȡ��/���ô�����Ԫ���ϵĶ�����������, �����ö��з���.
                                                        *
                                                        * @param {HTMLElement} elem -

                                                        ���������������elem���Ԫ���ϵ�queue�б�.
                                                        * @param {string} type -�����������е�����,��" fx ".
                                                        * @param {Array} array -������������.

                                                        ����һ������,���Ԫ�ر���û�ж����������е�ʱ��,�������ͻᱻ���ó�
                                                        ΪԪ�صĶ�����������


                                                        */
                                                        var queue = function( elem, type, array ){


                                                            if ( elem ){




                                                            type = type || "fx";




                                                            var q = jQuery.data( elem, type + "queue" );


//��ȡjQuery�����fx�������� 






                                                            if (!q || array )// ���û�ж�������, 
                                                            ���ߴ����˵���������array, �Ǿ���array����ԭ���Ķ�������.




                                                            q = jQuery.data( elem, type + "queue", jQuery.makeArray(
                                                            array) );



                                                            }
                                                        return q;//����elem�Ķ�������.
                                                        };

                                                        //---------------------------------------------------


                                                        ΪjQuery�������dequeue����-------------------------------------


                                                        /**
                                                        * �Ӷ�������������ɾ����һ������Ч������.
                                                        * @param {string} type -������������
                                                        */
                                                        jQuery.fn.dequeue = function(type){
// Ĭ��ɾ�� fx ��Ķ������� 
                                                            type = type || "fx";

                                                            return this.each(function(){



                                                            var q = queue(this, type);//��ȡԪ�صĶ����������� 






// �Ƴ��������������е�һ��Ԫ�� 





                                                            q.shift();






// ��������������л��к��������, 
                                                            ����this��Ϊ�ö��е�һ��Ԫ��( ����һ������ )����������ִ���������





// ͨ�׵�˵����shift��Ѷ������һ��Ԫ��q[ 0 
                                                            ]�ŵ�this����ִ��.ʵ�ʵ�Ч������ɾ����һ��Ч������֮��,����ִ�������
                                                            Ч������,��Ҫ����ͣ����





                                                            if ( q.length )





                                                            q[0].call( this );
                                                            });
                                                        };
                                                        //-------------------------------------------------------------------








                                                        //


                                                        ��jQuery������ж��������� --------------------------------


                                                        jQuery.extend({

                                                            speed: function(speed, easing, fn){



                                                            var opt = speed && speed.constructor == Object ? speed :{





                                                            complete: fn || !fn && easing ||jQuery.isFunction( speed
                                                            ) && speed,





                                                            duration: speed,





                                                            easing: fn && easing || easing && easing.constructor !=
                                                            Function && easing






                                                            /* ������Ĵ������һ��˵��: 




                                                             * opt����������: 



                                                             * complete : �������ʱ�����õĺ��� 



                                                             * duration : ����������ʱ�� 



                                                             * easing : ����Ч�� 



                                                             */






                                                            };






                                                        //
                                                        �����ĳ����¼�.�������ĳ���ʱ�����duration��һ��Number,
                                                        ��ô����������������ö�����ʱ��.




                                                        //
                                                        ��������duration����Number(���ʱ�����string),�Ǿ͵�fx�Ķ���ʱ����
                                                        ��(jQuery.fx.speeds)�в��ҵ�������duration��ֵ





                                                        // ��Ӧ����һ��ʲô����.
                                                        ����о������������(����˵"slow"��Ӧ�����־���600),
                                                        û�о���Ĭ�ϵ�jQUery.fx.def(400)������.





                                                        opt.duration =(opt.duration && opt.duration.constructor ==
                                                        Number ?





                                                        opt.duration :





                                                        jQuery.fx.speeds[opt.duration]) || jQuery.fx.speeds.def;






                                                        // Queueing





                                                        opt.old = opt.complete;//����opt.complete��opt.old��





                                                        opt.complete = function(){// ���¶���opt.complete, 
                                                            ���¶���ĺ��������ԭ���Ǹ�������һ��"���"��"����". ���Կ������¶���





// 
                                                            �ĺ����ڲ����ǵ�����ԭ���ĺ���(opt.old.call(this)),ֻ�����ڵ����ϵĺ�
                                                            ��֮ǰ���һ���Ƿ���Ҫ





// dequeue. 
                                                            ����ͨ��"����"����"���"����չԭ�����Ĺ��ܵķ�����jQuery��ʮ�ֳ���.





                                                            if ( opt.queue !== false )


//�ڵ���old�ĺ���֮ǰ�ȿ����Ƿ�Ҫdequeue. 




                                                            jQuery(this).dequeue();





                                                            if ( jQuery.isFunction( opt.old ))





                                                            opt.old.call( this );





                                                            };






                                                        return opt;
                                                        },


                                                        /*



                                                        *
                                                        ����һ���ķ��̲�����һ������.��ʵ����ģ���ض��ĺ�����������,ʹ��������
                                                        һ����Ч��( ��������[linear]�������Ұڶ�[swing] )




                                                        * p -����ÿ�������������ֵ



                                                        * n -Ŀǰ��û����



                                                        * firstNum -����



                                                        * diff -ϵ��



                                                        */


                                                        easing:{



                                                            linear: function( p, n, firstNum, diff ){



                                                            return firstNum + diff * p;



                                                            },



                                                        swing: function( p, n, firstNum, diff ){



                                                            return ((-Math.cos(p*Math.PI)/2)+ 0.5)* diff + firstNum;



                                                            }


                                                        },





                                                        timers: [],


                                                        timerId: null,





                                                        /*


                                                        * �������fx�Ĺ��캯����



                                                        *



                                                        */


                                                        /**





                                                        * �����fx�Ĺ��캯��. ÿһ���Ķ�����ʵ����һ��fx�Ķ���.



                                                        * @param {HTMLElement} elem HTMLԪ�ص�����



                                                        * @param {Object} options -�����Ĳ���



                                                        * @param {Object} prop -

                                                        */


                                                        fx: function( elem, options, prop ){



                                                            this.options = options;


                                                            this.elem = elem;//ע�������elem��һ��HTMLԪ�ص����� 



                                                            this.prop = prop;






                                                            if (!options.orig )



                                                            options.orig = {};


                                                        }






                                                        });


















                                                        //---------------------------------------------------- fx����ģ��



                                                        // ժ�������ϵ�˵��: jQuery FX��jQuery
                                                        UI��ĵڶ����ӿ⣬ǿ������Ч������UI�����ģ�飬�����������ʧ�����֣�
                                                        ��ɫ����С��λ�ñ任����ʹ��ʱ��


                                                        // ��չԭjQuery��API��������ô�����ļ򵥡�
                                                        //-------------------------------------------------------------------



                                                        /**


                                                        * jQueryΪÿ��Ԫ�ص�ÿ��Ҫ���еĶ��������Զ��½�һ��jQuery.fx����.

                                                        */



                                                        jQuery.fx.prototype ={





// Simple function for setting a style value 


                                                            /* 





                                                             * ����fx�Ķ���״̬ 

                                                             */


                                                            update: function(){





//����ð������options? 
                                                            ��:options��fx�Ĺ��캯���б����忴����Ĵ���



                                                            if ( this.options.step )



                                                            this.options.step.call( this.elem, this.now, this );






//_default: 
                                                            function(fx){





// 
                                                            fx.elem.style[ fx.prop ] = fx.now + fx.unit;





//}





                                                        (jQuery.fx.step[this.prop] || jQuery.fx.step._default)( this
                                                        );// thisָ����һ��jQuery.fx����. update����ʵ������





                                                        // ������step�еĺ��������update�Ĺ��ܵ�. step����





                                                        // �������������һ������ֵ���µ�HTMLԪ����. ����˵,




                                                        // �ٸ�����: ��this.prop == "opacity", ����update




                                                        // ����������͵�����jQuery.fx.step.opacity(this).




                                                        // opacity�����ͻὫ��ǰ���㵽��opacityֵ���µ�fx������









                                                        // Set display property to block for height/width animations





                                                        // ���Ҫ���� height ���� width
                                                        �Ķ���,��ôҪ������display��ʽ���ó�Ϊ block.





                                                        if ( this.prop == "height" || this.prop == "width" )



                                                        this.elem.style.display = "block";
                                                        },

                                                        // Get the current size
                                                        /**



                                                        *





                                                        * @param {boolean} force -��ȡԪ�ص�ǰ����ʱ, ��Ҫ��������ʽ,
                                                        ����Ҫ���ռ�����ʽ(���յ��ӵ�Ԫ����,Ԫ�������ֵ���ʽ).



                                                        *


                                                        ���ÿ���, �������ֵ,
                                                        �����Ǵ���jQuery.css������. ���Բο�jQuery.css����������ע��.




                                                        */


                                                        cur: function(force){



// ���this.prop��һ��HTML����, ��������Ե�ֵ���� 





                                                            if ( this.elem[this.prop] != null && this.elem.style[this.
                                                            prop] == null )





                                                            return this.elem[ this.prop ];






// �����ʱ��, this.prop��һ��style����. 
                                                            ʹ��jQuery.css��������ȡԪ�ص�cssֵ.





                                                            var r = parseFloat(jQuery.css(this.elem, this.prop, force));






// ���r��ֵ, ����r��ֵ��һ�����Խ��ܵķ�Χ(>-10000), 
                                                            �Ǿ�ֱ�ӷ������ֵ; ����, �Ǿ͵��ø��ײ��curCSS��������ȡ





// ����Ԫ�صĲ����ʽֵ. css�����ڲ�������curCSS, 
                                                            ���������е�style���Զ��ܴ�css�������ϴ���curCSS�����д���, ��





// ��һ������, 
                                                            �Ǿ��ǵ�this.prop��ֵΪ"width"��"height"��ʱ��,
                                                            css�����Լ��������ͽ��������, ����û�о���curCSS





// �Ĵ���. ��������д����Ǵ��ڶ�css������������"������", 
                                                            ��css������������Ҫ���ʱ��, ���ø��ײ��curCSS �����Դ���.




// ���������, ��û�а취��, 
                                                            ֻ�ܷ���0.





                                                            return r && r >-10000 ? r : parseFloat(jQuery.curCSS(this.


                                                            elem, this.prop)) || 0;
                                                            },

                                                        // Start an animation from one number to another
                                                        /**



                                                        * ������elems�ڵ�ÿһ��Ԫ��ʹ��callback���д���,
                                                        ����������Ԫ�طŵ�һ���µ����鵱��, ��󷵻��������.



                                                        *





                                                        * ע��: ��������ڹ�������jQuery.map�ظ�, �����jQuery
                                                        1.3.2�����ѽ���ɾ��.



                                                        *





                                                        * @param {Array} elems -��Ҫ�����Ԫ����ɵ�����



                                                        * @param {Function} callback -������



                                                        */


                                                        map: function( elems, callback ){



                                                            var ret = [];






// Go through the array, translating each of the items to 
                                                            their





// new value (or values). 





                                                            for ( var i = 0, length = elems.length; i < length; i++ ) {





                                                            var value = callback( elems[ i ], i );






// value���� null��˵������ɹ������������µ���������ȥ 





                                                            if ( value != null )





                                                            ret[ ret.length ]= value;





                                                            }






                                                        //
                                                        ����һ���µ����飬��������е�ÿ��Ԫ�ض�����ԭ�������е�Ԫ�ؾ�callback
                                                        ��������





                                                        return ret.concat.apply( [], ret );
                                                        },

                                                        //jQuery �����animate �������ǵ������������������Ķ�����
                                                        /**


                                                        * ִ��һ������ֵ��from��to�Ķ���.



                                                        * ����animate�ĵײ�ʵ��.



                                                        *





                                                        * @param {Object} from -���Կ�ʼֵ



                                                        * @param {Object} to -������ֵֹ



                                                        * @param {Object} unit -����ֵ�ĵ�λ,�� " px "



                                                        */


                                                        custom: function(from, to, unit){



                                                            this.startTime = now();





                                                            this.start = from;





                                                            this.end = to;





                                                            this.unit = unit || this.unit || "px";



                                                            this.now = this.start;





                                                            this.pos = this.state = 0;






//������������,Ӧ����������� 





                                                            this.update();






                                                            var self = this;//thisָ����һ��jQuery.fx��������. 





//����һ���ڲ�����t, ���t����������ִ�ж�����ͷ�Ŷӵȴ�ִ��. 




                                                            function t(gotoEnd){





//custom������ʹ��setInterval���ϵ��������ﵽ������Ч�� 





                                                            return self.step(gotoEnd);





                                                            }






                                                        t.elem = this.elem;//ע��,this.elem��һ��jQuery����






                                                        // �Ѷ��������Ž�����ִ�ж���������





                                                        jQuery.timers.push(t);






                                                        // �������jQuery��û�н������ʱ��, �Ǿ��½�һ��,
                                                        ����һ���͹���.




                                                        if ( jQuery.timerId == null ){





//��ȡinterval������, 
                                                            �ڶ�����û����Ҫִ�еĺ�����ʱ��,��������.





//����ʹ��setInterval���������ж�����������Ķ�������,һֱ����������û
                                                                ���˺�����ֹͣ





                                                            jQuery.timerId = setInterval(function(){





                                                            var timers = jQuery.timers;






// 
                                                            �����������ж��������ÿһ����������,������ʱ�������¶���:




// (1) ִ�ж��� 





// (2) ��������Ҫѭ��ִ�еĶ�������������ж��� 





// ��,ʲô��" ������Ҫѭ��ִ�еĶ������� " ��? ��: 
                                                            ������������false, ����" if(!timer[i]())timers.aplice(i--,1) "




// �Ͳ���ִ��,��������ִ����֮�󲻻ᱻ��������ж��� 





// ��ô����һ��interval����,������������ֱ�ִ�� 





                                                            for ( var i = 0; i < timers.length; i++ )





                                                            if (!timers[i]() )//���ж������� 





                                                            timers.splice(i--, 1);//����������������ж��� 






//����������ж�����û��Ҫ���еĶ���������,����interval 




                                                            if (!timers.length ){





                                                            clearInterval( jQuery.timerId );





                                                            jQuery.timerId = null;





                                                            }





                                                        }, 13);





                                                        }
                                                        },

                                                        // Simple 'show' function
                                                        /**



                                                        * ���׵�Ԫ����ʾ



                                                        */


                                                        show: function(){



// Remember where we started, so that we can go back to it 
                                                            later





// ����: ���������Ǵ��ĸ�����ֵ��ʼ��, 
                                                            �������Ǵ�����Ҫ��ʱ��Ϳ�����������ֵ.





                                                            this.options.orig[this.prop]= jQuery.attr( this.elem.style,
                                                            this.prop );





                                                            this.options.show = true;






// Begin the animation ����: ��ʼ���� 





                                                            this.custom(0, this.cur());






// Make sure that we start at a small width/height to avoid 
                                                            any





// flash of content 





// ����: ȷ�����Ǵ�һ����С��width/heightֵ��ʼ����, 
                                                            �������Ա������ݵ���˸.




                                                            if ( this.prop == "width" || this.prop == "height" )



                                                            this.elem.style[this.prop]= "1px";




// Start by showing the element 





                                                            jQuery(this.elem).show();// ����jQuery�����show����. 
                                                            },

                                                        // Simple 'hide' function
                                                        /**


                                                        * ���صĶ���



                                                        */


                                                        hide: function(){



// Remember where we started, so that we can go back to it 
                                                            later





// ����: ���������Ǵ��ĸ�����ֵ��ʼ��, 
                                                            �������Ǵ�����Ҫ��ʱ��Ϳ�����������ֵ.





                                                            this.options.orig[this.prop]= jQuery.attr( this.elem.style,
                                                            this.prop );





                                                            this.options.hide = true;






// Begin the animation ����: ��ʼ���� 





                                                            this.custom(this.cur(), 0);
                                                            },

                                                        // Each step of an animation
                                                        /**



                                                        * һ��������һ��(Ҳ��ÿһ��֡)�������������ִ��.



                                                        *





                                                        * @param {Object} gotoEnd



                                                        */


                                                        step: function(gotoEnd){



                                                            var t = now();







// ������������˻���ǿ��Ҫ�󶯻�ֹͣ(gogoEnd == true) 




                                                            if ( gotoEnd || t > this.options.duration + this.startTime ){





//�����ڵ�״̬���ϱ��ĩ״̬, �����Ѿ����� 





                                                            this.now = this.end;//this.end == custom( form, to, unit 
                                                            )�е� to





                                                            this.pos = this.state = 1;//��custom��������,���Ƕ���0 




                                                            this.update();//����״̬ 






//this.options.curAninm��װ�����û�Ҫ���õ����Եļ��� 





//�������������Ϊtrue, ��ʾ�����Ѿ���� 





                                                            this.options.curAnim[ this.prop ]= true;






                                                            var done = true;





                                                            for ( var i in this.options.curAnim )





                                                            if ( this.options.curAnim[i] !== true )


//�����һ�����ԵĶ���û�����,��������ȫ�����,done = false; 




                                                            done = false;






//�����е�����,��ʾcurAnim[]��������ȫ��true,����ζ���û����õ�������
                                                            �ԵĶ������Ѿ����





                                                            if ( done ){
















                                                            ),�Ǿ�hide ����





                                                            or shown





                                                            if ( this.options.display != null ){


// Reset the overflow 


                                                            this.elem.style.overflow = this.options.overflow;


// Reset the display 


                                                            this.elem.style.display = this.options.display;
                                                            if ( jQuery.css(this.elem, "display") == "none" )
                                                            this.elem.style.display = "block";
                                                            }


                                                        // Hide the element if the "hide" operation was done
                                                        // ������ʱ��hide��( �û�������fx�����hide����


                                                        if ( this.options.hide )
                                                        this.elem.style.display = "none";


                                                        // Reset the properties, if the item has been hidden


                                                        if ( this.options.hide || this.options.show )
                                                        for ( var p in this.options.curAnim )
                                                        jQuery.attr(this.elem.style, p, this.options.


                                                        orig[p]);// reset����, options����Ķ��ǳ�ʼֵ





                                                        }






                                                        if ( done )





                                                        // Execute the complete function





                                                        // thisָ�����һ��jQuery.fx����,
                                                        ��this.elem����һ��HTMLԪ��.





                                                        this.options.complete.call( this.elem );


                                                        //�����������, ������Ҫ�����ʱ��ִ�е��Ǹ�callback.





                                                        //
                                                        ע��step�������е�ʱ��,����custom�����б���������ʱ����t��,Ȼ�󱻼���
                                                        ��jQuery.timers������õ����е�





                                                        //
                                                        ����false,��ô���step�ͻ������н���֮����������ж���,��timers����
                                                        һ��interval��,��( ���step )�������ٱ�����





                                                        return false;





                                                        }







                                                        //����û�й��ڻ���û�б�ǿ��ֹͣ





                                                        else {





                                                            var n = t -this.startTime;//���㶯����ʼ����� 





                                                            this.state = n / this.options.duration;


//��������˼���֮���� 






// Perform the easing function, defaults to 
                                                            swing
//����n,this.options.duration����easing 




// ִ�ж����Ŷ�����, 
                                                            ��Ĭ�����


//[...]û��Ч����,��Ϊ�����岢û��ʹ�õ���Щ 





//���� 





                                                            this.pos = jQuery.easing[this.options.easing || (jQuery.
                                                            easing.swing ? "swing" : "linear")](this.state, n, 0, 1, this.options
                                                            .duration);






// 
                                                            ������һ��step��ʹ������ֵ.����һ��this.pos���ֵ,�������ֵʹ��Ԫ����
                                                            �Եı仯�������Ի������Ұڶ�������.




                                                            this.now = this.start + ((this.end -this.start)* this.
                                                            pos);






// Perform the next step of the animation 





// 
                                                            �����洦������һstep����ʹ�õ�����֮��,��Ȼ���Ǹ�����.�������ж���Ч��





                                                            this.update();





                                                            }






                                                        // ����true,˵�����step���,���ǲ����˳�������������.




                                                        //
                                                        ע��step�������е�ʱ��,������custom�����б���������ʱ��������t��,Ȼ��
                                                        �����뵽jQuery.timers������õ����е�.




                                                        //
                                                        ����true,��ô���step�ͻ������н����������ڶ�������������ͷ,�ȴ���һ��
                                                        interval�ٴα�ִ��.




                                                        return true;
                                                        }

                                                        };



                                                        //-----------------------���� fx �Ķ�����������speeds ��

                                                        ����4�������Ķ���"����(��һ֡)"����----------------------------------


                                                        Query.extend( jQuery.fx,{
                                                        /**



                                                         * Ĭ�ϵĶ����ٶ�����



                                                         * ���ǵĵ�λ�Ǻ���



                                                         */


                                                            speeds:{



                                                            slow: 600,





                                                            fast: 200,





// Default speed 





                                                            def: 400
                                                            },
                                                        /**



                                                        * ���ö���"����"����.



                                                        *
                                                        ����Ԫ��(fx.elem)λ�ö�����͸���ȶ����������������Զ�����"��һ֡"��Ҫ
                                                        ��ʾ��ֵ.




                                                        * ���Կ���step֧������һ�������ռ�, ���ڵ�"scrollLeft",
                                                        "scrollTop"�Ȳ�����������"��һ֡"��������ֵ��"����"����.



                                                        * ����㻹�ǲ��������ڽ�ʲô, û�й�ϵ, ���벢������:



                                                        * @param {jQuery.fx} fx -��ǰ�Ķ�������.
                                                        jQueryΪÿһ����Ҫ���ж��������Զ�����һ����������.



                                                        */


                                                        step:{



                                                        /**





                                                         * ��Ԫ�ض�λ����ǰ��������Ҫ��λ��(ˮƽ����)



                                                         * @param {jQuery.fx} fx -��ǰ�Ķ�������.
                                                        jQueryΪÿһ����Ҫ���ж��������Զ�����һ����������.



                                                        */





                                                        scrollLeft: function(fx){





                                                            fx.elem.scrollLeft = fx.now;





                                                            },






                                                        /**





                                                        * ��Ԫ�ض�λ����ǰ��������Ҫ��λ��(��ֱ����)



                                                        * @param {jQuery.fx} fx -��ǰ�Ķ�������.
                                                        jQueryΪÿһ����Ҫ���ж��������Զ�����һ����������.



                                                        */





                                                        scrollTop: function(fx){





                                                            fx.elem.scrollTop = fx.now;





                                                            },






                                                        /**





                                                        * ��Ԫ�ص�opacity���Ե�ֵ���õ���ǰ��������Ҫ��ֵ



                                                        * @param {jQuery.fx} fx -��ǰ�Ķ�������.
                                                        jQueryΪÿһ����Ҫ���ж��������Զ�����һ����������.



                                                        */





                                                        opacity: function(fx){





                                                            jQuery.attr(fx.elem.style, "opacity", fx.now);



                                                            },






                                                        /**





                                                        *
                                                        ��Ԫ�ص�����(���������fx.propָ��)ֵ���õ���ǰ���������ֵ.




                                                        * @param {jQuery.fx} fx -��ǰ�Ķ�������.
                                                        jQueryΪÿһ����Ҫ���ж��������Զ�����һ����������.



                                                        */





                                                        _default: function(fx){





                                                            fx.elem.style[ fx.prop ]= fx.now + fx.unit;





                                                            }
                                                        }
                                                        });


                                                        // The Offset Method
                                                        // Originally By Brandon Aaron, part of the Dimension Plugin
                                                        // http://jquery.com/plugins/project/dimensions
                                                        /**
                                                        * ��ȡƥ��Ԫ�ؼ�������Ԫ�ص�offset.
                                                        * ��νoffset��Ԫ�����ĵ��е�����.
                                                        */
                                                        jQuery.fn.offset = function() {


//this[0]��ʾjQuery 
                                                            ѡ����ƥ�������Ԫ���еĵ�һ��Ԫ��





//�ɼ��������ֻ�Ƕ�jQueryѡ����ѡ�еĵ�һԪ�������� 


                                                            var left = 0, top = 0, elem = this[0], results;

// ������Ԫ�ش���, ��jQuery.browser �����ռ�����Щ���� 
// with�൱��using namespace, ����ĳ�������ռ���, 


                                                            ������ʡ��Ҫ�ڵ��ú���ʱдһ�󴮵����ֿռ�ǰ׺.

                                                            if ( elem ) with ( jQuery.browser ){



                                                            var parent = elem.parentNode,



                                                            offsetChild = elem,



                                                            offsetParent = elem.offsetParent,


                                                            doc = elem.ownerDocument,// 
                                                            ȡ��ĳ���ڵ�ĸ�Ԫ��( document���� )


                                                            safari2 = safari && parseInt(version)< 522 && !
                                                            /adobeair/i.test(userAgent),



                                                            css = jQuery.curCSS,


                                                            fixed = css(elem, "position") == "fixed"; // 
                                                            Ԫ���Ƿ���fixed��λ.





// Use getBoundingClientRect if available 


// getBoundingClientRect ��IE �ķ��� 



                                                            if ( elem.getBoundingClientRect ){


                                                            var box = elem.getBoundingClientRect();// 
                                                            �����Ԫ�ذ󶨵Ŀͻ�������,

                                                            ͨ��������ξ��ܻ�ȡԪ�������document������.





// Add the document scroll offsets 


// ����documentҲ������ƫ��, 
                                                            ��˰�document��offsetҲ����, ����һʧ.

// �����add������һ���ڲ�����ĺ���, 
                                                            ���Ĺ�����Ҫ���������������ֱ��ۼӵ�left��top��.


                                                            add(box.left + Math.max(doc.documentElement.scrollLeft,
                                                            doc.body.scrollLeft),



                                                            box.top + Math.max(doc.documentElement.scrollTop,
                                                            doc.body.scrollTop));








// IE adds the HTML element's border, by default it is 
                                                            medium which is 2px



// IE 6 and 7 quirks mode the border width is 
                                                            overwritable by the following css html { border: 0; }



                                                        // IE 7 standards mode, the border is always 2px



                                                        // This border/offset is typically represented by the
                                                        clientLeft and clientTop properties



                                                        // However, in IE6 and 7 quirks mode the clientLeft and
                                                        clientTop properties are not updated when overwriting it via CSS



                                                        // Therefore this method will be off by 2px in IE while
                                                        in quirksmode


                                                        /* ����: IE�����HTMLԪ�صı߿�,
                                                        ��Ĭ�����֮��ΪmediumҲ����2px




                                                        * IE 6 �� 7 �Ĺ��ģʽ�����HTMLԪ���ϵ�border
                                                        width������css����"html{ border:0}"����д



                                                        * ��IE7�ı�׼ģʽ��, ����߿�������2px



                                                        * ���border/offset
                                                        ��һ������»�����clientLeft��clientTop���Ա�ʾ(��Ϊ���border������HT
                                                        MLԪ�ص�ƫ�ơ�������ע)



                                                        * Ȼ��,
                                                        ��IE6��7�Ĺ��ģʽ���޸�clientLeft��clientTop���Ե�ֵ�������޸����bor
                                                        der
                                                        *
                                                        ��������ַ���(�������д������õķ�����������ע)������IE�Ĺ��ģʽ��ʧЧ


                                                        .



                                                        */


                                                        add(-doc.documentElement.clientLeft,-doc.
                                                        documentElement.clientTop );//����IE��HTML����ӵ�border







                                                        // Otherwise loop through the offsetParents and parentNodes





                                                        }






                                                        // ����IE ������Ļ�...�Ǿ�����������w3c��׼�������





                                                        else {






// Initial element offsets ����:��ʼ��Ԫ�ص�offsets 




                                                            /* offsetLeft��offsetTop��Ԫ������������λ���ȵ�ƫ����. 




                                                             * 
                                                             �����λ���Ⱦ���Ԫ�ص������������,��������postionΪfixed/absolute/rel 
                                                             ative��Ԫ��. 




                                                             * ���û��������Ԫ��, "�����λ����"����document. 



                                                             */





                                                            add( elem.offsetLeft, elem.offsetTop );






// Get parent offsets 





// ��ȡparent��offset, ��ֹԪ�ص�parentҲ������ƫ��. 




                                                            while ( offsetParent ){





// Add offsetParent offsets 
                                                            ����:��offsetParent��offsetҲ�ӽ���.





                                                            add( offsetParent.offsetLeft, offsetParent.offsetTop
                                                            );






// Mozilla and Safari > 2 does not include the 
                                                            border on offset parents





// However Mozilla adds the border for table or 
                                                            table cells





                                                            /* ����: Mozilla��Safari 
                                                             2���ϵ�������ڼ���offsetParent��offsets��ʱ��û�а�borderҲ���ȥ, 




                                                             * ���� Mozilla���table��table 
                                                             ��Ԫ��(��td,th)����border�Ŀ��. 



                                                             */





                                                            if ( mozilla && !/^t(able|d|h)$/i.test(offsetParent.
                                                            tagName) || safari && !safari2 )





                                                            border( offsetParent );//����offsetParent ��border 





// Add the document scroll offsets if position is 
                                                            fixed on any offsetParent





// ���Ԫ�ص�offsetParent��position:fixed��, 
                                                            ��ô�����Ӵ��Ĺ�����.




                                                            if (!fixed && css(offsetParent, "position") ==
                                                            "fixed")



                                                            fixed = true;







                                                            /* 





                                                             * 
                                                             ��������д�������offetChild/offsetParentΪ�µ�ֵ, 
                                                             ��������һ�ֵ�ѭ�������ǲ���ͨ�����Ǽ������ȷ��left��top��ֵ. 




                                                             */







// Set offsetChild to previous offsetParent unless 
                                                            it is the body element





// ����: ����offsetChildΪ��ǰoffsetParent, 
                                                            ������(����ǰ��offestChild)����body.




                                                            offsetChild = /^body$/i.test(offsetParent.tagName)?
                                                            offsetChild : offsetParent;







// Get next offsetParent 





// �������ϲ㿴, �������offetParent 
                                                            �ͼ��������ǵ�offsetLeft��offsetTop��boerderWidth�ӽ���





                                                            offsetParent = offsetParent.offsetParent;





                                                            }







                                                        // Get parent scroll offsets





                                                        // �����������ڲ�û�в���������ʱ��,
                                                        ǰ��Ĵ����Ѿ����������, ����������ڷ����˹���,
                                                        ������ǰ��Ĵ���Ͳ�������.





                                                        //
                                                        �����ڻ�ȡ��parent��offset֮��,��������Ҫ��ȡparent��scroll��.




                                                        //





                                                        // scroll���ڸ�Ԫ�س��ֹ����������֮�²Żᷢ������






                                                        // parent���ڲ������parent
                                                        ����body����html,��ô���Ǿ�һֱ���ϱ���Ԫ�ص�����,������������̵�����
                                                        ������ĳ�����ȳ����˹�����





                                                        // �ͼ�ȥ������������Ĺ�����.




                                                        while ( parent && parent.tagName && !/^body|html$/i.test(
                                                        parent.tagName)){





                                                            /* Remove parent scroll UNLESS that parent is inline 
                                                             or a table to work around Opera inline/table scrollLeft/Top bug 





                                                             * COMP:ɾ�� parent �� scroll ����parent 
                                                             ��inlineԪ�ػ���table. ��������Ŀ����Ϊ�˴��� Opera 
                                                             ����Ԫ�غ�table��scrollLeft/Top 



                                                             * ��bug. 



                                                             * 





                                                             * ���������֮�»���ֹ�����: 



                                                             * (1) ���ڲ�������ʾ����document 



                                                             * (2) Ԫ��������overflow:auto����overflow:scroll 



                                                             * 





                                                             * ���, 
                                                             ��������һ�����е�parentNode����ȥparent���ֵ�scroll�Ǳ�Ҫ��.��Ȼ�Ļ�,
                                                             ����ֱ�Ӽ�ȥdocument��scroll�Ϳ�����. 



                                                             */





                                                            if (!/^inline|table.*$/i.test(css(parent, "display"
                                                            )) )





// Subtract parent scroll offsets 





                                                            add(-parent.scrollLeft,-parent.scrollTop );






// Mozilla does not add the border for a parent that 
                                                            has overflow != visible





// COMP:����: 
                                                            Mozilla�ڼ���������overflow!=visible��parent��offset��ʱ��,
                                                            ��û�а�borderҲ���ȥ.




                                                            /* ����һ��: 




                                                             * ʹ��scrollLeft/Top����ȡһ��Ԫ�صĹ�������ʱ��, 
                                                             ���offset�����border�����Ե�����. ��ô��Ԫ�ؾ����˷�0�߿��ʱ��, 



                                                             * 
                                                             offsetLeft/Top��Ӧ�ð����߿�Ŀ��.����Mozilla�ڼ���overflow!=visible
                                                             ��Ԫ�ص�scrollLeft/Top��ʱ��,��û�а���� 





                                                             * 
                                                             border���ȥ,���൱������ڱ߿���ڱ�Ե����,��������border�Ŀ��, 
                                                             ����jQuery��ʹ�����µĴ�������������ȱʧ��border 




                                                             * ���ȥ. 



                                                             */





                                                            if ( mozilla && css(parent, "overflow") != "visible" )



                                                            border( parent );






// Get next parent 





                                                            parent = parent.parentNode;//��ȡ��һ��parent. 




                                                            }






                                                        // Safari <= 2 doubles body offsets with a fixed
                                                            position element/offsetParent or absolutely positioned offsetChild





                                                            // Mozilla doubles body offsets with a non-absolutely
                                                            positioned offsetChild





                                                            // COMP:safari 2 ���µ��������һ��bug:




                                                            // �������Ԫ�ص�position=="absolute"����Ϊ"fixed",
                                                            ��ôsafari���body��offsets(Left/Top)���һ��.(Ҫ������һ��)




                                                            // ����Mozilla(Firefox)Ҳ��һ�����Ƶ�bug:




                                                            // ������Ԫ�ص�position != "absolute" ʱ, body 
��offsetsҲ�ᱻ���һ��.(Ҫ������һ��) 




if ((safari2 && (fixed || css(offsetChild, "position") 
== "absolute")) || 



(mozilla && css(offsetChild, "position") != 
"absolute")) 



add(-doc.body.offsetLeft,-doc.body.offsetTop ); 






// Add the document scroll offsets if position is fixed 





// 
����:��Ԫ����postion:fixed��ʱ��,�Ͱ�document��scrollҲ�����ȥ 





if ( fixed ) //doc = ownerDocument 





add(Math.max(doc.documentElement.scrollLeft, doc.body 
.scrollLeft), 





Math.max(doc.documentElement.scrollTop, doc.body 
.scrollTop)); 





} 






// Return an object with top and left properties 





// ��һ������offset����������,���᷵��. 




results ={ top: top, left: left }; 
} 
/** 



* 
��ȡԪ�ص�borderLeftWidth��borderTopWidth�������Ƿֱ���ӵ�left��top��
ȥ. 




* @param {HTMLElement} elem - HTMLElement 



*/ 


function border(elem){ 



add( jQuery.curCSS(elem, "borderLeftWidth", true), jQuery. 


curCSS(elem, "borderTopWidth", true) ); 
} 

/** 



* ��l��t�ֱ���뵽left��top�� 



* @param {Number} l 



* @param {Number} t 



*/ 


function add(l, t){ 



//10��ʾʮ���� 





left += parseInt(l, 10) || 0; 





top += parseInt(t, 10) || 0; 
} 

return results; 

};//jQuery.fn.offset����. 



jQuery.fn.extend({ 
/** 


* 
����Ԫ��������Լ���offsetParent�����ƫ��.��������һ������, 
��������left, top�������Էֱ�洢��Ԫ��������Լ���offsetParent��ƫ��. 




* 





* ��ע��, 
position����ʹ������Ԫ�ص�offset�븸Ԫ�ص�offset����ķ�ʽ�����һ��Ԫ
����������ĸ���Ԫ�ص�ƫ��. 



* ��jQuery.fn.offset���������ǿ��Կ���, 
ֱ��ʹ��Ԫ��offsetLeft/Top����ȡԪ������������λ���ȵ�ƫ�ƻ���ڷ��� 
.��ΪԪ�ؿ��ܻᴦ��һ�� 



* 
�����˹���������������.�������������ͳһʹ��jQuery.fn.offset��������
ȡ����Ԫ�غ���Ԫ�ص�offset,Ȼ������offset����, ������õ�offset 




* ���ǱȽ�׼ȷ��ƫ��. 



* 





* ͬʱҲע��, 
�Լ���offsetParent��һ������Dom�н��Լ�����������Ԫ��. 
offsetParentӦ����������Ѷ�λ(������postion:fixed/absolute/relative) 



* ����. 



*/ 


position: function() { 



var left = 0, top = 0, results; 






// ע��Ŷ,thisָ�����һ��jQuery����. 
��������Կ���jQuery.fn.position����ֻ��ȡƥ��Ԫ�ؼ�������Ԫ�ص�positi 
on 




if ( this[0]){ 





// Get *real* offsetParent 





// ʹ��offsetParent()��ȡԪ��������offsetParent. 




var offsetParent = this.offsetParent(), 






// Get correct offsets 





// 
offset��һ����/ֵ�Եļ���:{left:someVlaue,top:someValue},jQuery�����o 
ffset�����ܹ�׼ȷ��,��������ػ�ȡԪ�ص�offset 




offset = this.offset(), 






// 
���offsetParent��body������html��������ƫ��(parentOffset)Ϊ{top:0,lef 
t:0},��Ϊ���Ƕ�û��offsetParent��. 




// 
�����һ���Ԫ��(����(body��html))�����ʹ��offset()�����㿩. 




parentOffset = /^body|html$/i.test(offsetParent[0]. 
tagName)?{ top: 0, left: 0 }: offsetParent.offset(); 






// Subtract element margins 





// ��������Ҫ��ȥelement��margins 





// note: when an element has margin: auto the offsetLeft 
and marginLeft 





// are the same in Safari causing offset.left to 
incorrectly be 0 





// �� Safari��,���Ԫ�ر����ó� margin:auto, 
��ôԪ�ص�offsetLeft�� 
marginLeft�ͻ���һ��,���һᵼ��offset.left����ر�Ϊ0. 




offset.top -= num( this, 'marginTop' ); 


//������ȡthis[0]Ԫ�ص�'marginTop'������ֵ�����ֲ���,��ͬ. 




offset.left -= num( this, 'marginLeft' ); 




// Add offsetParent borders 





// 
��Ԫ�صĶ�λ������������λ����border���ڱ�Ե�������, 
��parentOffset����õ������λ���ȵ�ƫ�Ʋ�û�а��������λ���ȵ�border 




// �Ŀ��.��ҿ��Ի�һ��ͼ�Ϳ�������, 
���ֱ��ʹ������offset����õ��Ľ��������˶�λ����border�Ŀ��.���
�����ｫ���border�Ŀ�� 





// ����parentOffset����ȥ, 
���������ʱ��(���Ǽ���)�ͻὫ���border�Ŀ�ȼ�ȥ. 





parentOffset.top += num( offsetParent, 'borderTopWidth' 
); 





parentOffset.left += num( offsetParent, 'borderLeftWidth' 
); 






// Subtract the two offsets 





// 
ʹ����Ԫ�ص�offset��ȥ����Ԫ�ص�offset�������Ԫ������ڸ���Ԫ�ص�ƫ�� 
. 




results ={ 





//��Ԫ������ڵ�ǰ�ӿڵ�ƫ�� 





top: offset.top -parentOffset.top, 





//��Ԫ������ڵ�ǰ�ӿڵ�ƫ�� 






// ����������������Ԫ������ڸ�Ԫ�ص�ƫ�� 





// ��ͬ 






left: offset.left -parentOffset.left 





}; 





} 






return results;//���ѽ������. 
}, 

/** 


* ��ȡƥ��Ԫ�ؼ�������Ԫ�ص�offsetParent,�������λԪ�� 



*/ 


offsetParent: function() { 



var offsetParent = this[0].offsetParent; 






//whileѭ��������,ֻҪԪ�ص�offsetParent����body����html, 
��ôһֱ����׷�����������λ����(��positionΪabsolute/fixed/relative��
����). 




// 
offsetParent����body����html 


// offsetParent��position 
== 'static' 




while ( offsetParent && (!/^body|html$/i.test(offsetParent. 


tagName) && jQuery.css(offsetParent, 'position') == 'static')) 



offsetParent = offsetParent.offsetParent; 






return jQuery(offsetParent);//��jQuery���󽫽������ 
} 
}); 


// Create scrollLeft and scrollTop methods 
/* 
* ���涨����������scrollLeft��scrollTop: 
* scrollLeft����ˮƽ�����ϵĹ�����/���߽�ҳ�������ָ����λ�� 
* scrollTop������ֱ�����ϵĹ�����/���߽�ҳ�������ָ����λ�� 
* 
* 

��Щ�����������ƥ��Ԫ�ؼ����е���Ԫ��,������Щ��Ԫ��Ҳ����������, 

����������window������document. 
*/ 
jQuery.each(['Left', 'Top'], function(i, name){ 
var method = 'scroll' + name; 

jQuery.fn[ method ]= function(val){ 


if (!this[0]) return; 






return val != undefined ? 






// Set the scroll offset 





// ����и���������һ��ֵval,�Ǿ�scroll ��val���λ���� 





this.each(function() { 





this == window || this == document ? 





// i ��ʾ����['Left', 
'Top']��Ԫ�ص��±�.���Կ���,����±겻��0����1 





// �� i �� 0 ʱ,˵����������Left��ֵ 





// window����scroll���������:(val,ԭ����Topֵ); 





// �� i Ϊ 1 ʱ,˵����������Top��ֵ 





// window����scroll���������:(ԭ����Left,val); 




window.scrollTo( 





!i ? val : jQuery(window).scrollLeft(), 





i ? val : jQuery(window).scrollTop() 





): 





//����������õ�Ԫ�ز���window����document,��ô�����ǰ�ֵ������ȥ,����
����ʵ�ʵ��ж� 





this[ method ]= val; 





}) : 






// Return the scroll offset 





// 
���û�и���������val���ֵ,��ô������Ҫ�����Щ���Ե�ֵ(val != 
undefined����false) 




this[0] == window || this[0] == document? 





/* i �����ø�����һ��, 0 ����scrollLeft; 1 
����scrollTop 




* selfָ��ǰ��window. 



* 
�������д������ȳ���w3c��׼�ķ�������ȡ���ڵĹ�����,��һ������Է�IE��
�ִ������ 





* 
�������������document.documentElement�ϻ�ȡ,����Ҫ��Ե���IE6�ڽ���
��<DOCTYPE>��ͷ���ĵ�ʱ�����. 




* ������ǲ��ܻ�ȡ, 
��ʹ��document.body[methed]�ķ�ʽ����ȡ���ڵĹ�����, 
����Ҫ�����IE4-5�Լ�IE6�Ĺ��ģʽ. 



*/ 





self[ i ? 'pageYOffset' : 'pageXOffset' ]|| 


//pageX/YOffset��netscape�ķ���. 





jQuery.boxModel && document.documentElement[ method 
]||//documentElement��һ����ݷ�ʽ,����IE6/7��strictģʽ�� 





// boxModel��һ��boolean,��ʾ�Ƿ���ʹ��w3c�ĺ���ģ�� 






document.body[ method ]: 






this[0][ method ]; 
}; 
}); 

// Create innerHeight, innerWidth, outerHeight and outerWidth methods 
/* 
* ����innerHeight, innerWidth, outerHeight �� outerWidth���� 
* inner����:innerWidth = width(���ݿ��) + paddingLeft + paddingRight 
* outer����:outerWidth = innerWidth + borderLeftWidth + 

borderRightWidth + marginLeftWidth + marginRightWidth 
* (innerHeight��outerHeight���㷨ͬ��) 
* ����ĳ�����ǰ��������ķ��������. 
*/ 
jQuery.each([ "Height", "Width" ], function(i, name){ 

var tl = i ? "Left" : "Top", // top or left 


br = i ? "Right" : "Bottom"; // bottom or right 

// innerHeight and innerWidth 
jQuery.fn["inner" + name]= function(){ 



//this��һ��jQuery���� 





//���ݵ�Height/Width 




return this[ name.toLowerCase() ]() + 





//paddingLeft��paddingRight(padingTop��paddingBottom) 




num(this, "padding" + tl)+ 



num(this, "padding" + br); 
}; 

// outerHeight and outerWidth 
// outer����inner�ټ���border��margin 
jQuery.fn["outer" + name]= function(margin){ 

//nameҪô��Height,Ҫô��Width 




return this["inner" + name]() + 



num(this, "border" + tl + "Width")+//tlΪ"Left" or "Top" 


num(this, "border" + br + "Width")+//brΪ"right" or 

"bottom" 





(margin ? 





num(this, "margin" + tl)+ num(this, "margin" + br): 


0); 
}; 



});})(); 



