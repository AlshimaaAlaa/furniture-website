import React from "react";
import "./Policy.scss";
function Policy() {
  return (
    <div className="policyContainer">
      <div>
        <div className="text">
          <img src="/assets/images/policy.png" alt="policy" />
          <p className="privacy">سياسة الخصوصية</p>
        </div>
        <p>
          نحن في
          <span className="span">“أمجاد”</span>
          نحترم خصوصية زوار موقعنا ونعمل بجد لحماية أي معلومات شخصية يتم جمعها
          منك. توضح سياسة الخصوصية هذه كيفية جمع
          <br /> واستخدام وحماية معلوماتك الشخصية عند زيارتك لموقعنا.
        </p>
      </div>
      {/* items */}
      <div>
        <h5>1. المعلومات التي نجمعها</h5>
        <p className="" style={{ fontWeight: "bolder" }}>
          نقوم بجمع أنواع مختلفة من المعلومات لضمان تجربة مستخدم سلسة ومرضية،
          وتشمل:
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            المعلومات الشخصية: مثل الاسم، عنوان البريد الإلكتروني، العنوان، رقم
            الهاتف.
          </span>
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            معلومات الاستخدام: مثل الصفحات التي تزورها، الوقت الذي تقضيه على
            الموقع، وأنماط التصفح.
          </span>
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            البيانات التقنية: مثل عنوان IP، نوع المتصفح، ونظام التشغيل.
          </span>
        </p>
      </div>
      <div>
        <h5>2. كيفية استخدام المعلومات</h5>
        <p style={{ fontWeight: "bolder" }}>
          نستخدم المعلومات التي نجمعها للأغراض التالية:
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            تحسين تجربتك في الموقع وتقديم محتوى يناسب اهتماماتك.
          </span>
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            تحسين خدماتنا ومنتجاتنا بناءً على ملاحظات المستخدمين.
          </span>
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            التواصل معك بخصوص طلباتك أو استفساراتك.
          </span>
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            إرسال تحديثات أو عروض ترويجية، إذا وافقت على ذلك.
          </span>
        </p>
      </div>
      <div>
        <h5>3. حماية المعلومات</h5>
        <p>
          نلتزم بحماية معلوماتك الشخصية من الوصول غير المصرح به، أو الكشف غير
          المصرح به، أو أي شكل من أشكال التلاعب. نستخدم مجموعة من الإجراءات
          الأمنية
          <br /> مثل تشفير البيانات، وجدران الحماية، وتدابير حماية أخرى.
        </p>
      </div>
      <div>
        <h5>4. مشاركة المعلومات</h5>
        <p style={{ fontWeight: "bolder" }}>
          نحن لا نقوم ببيع أو تأجير أو تبادل معلوماتك الشخصية مع أي طرف ثالث إلا
          في الحالات التالية:
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            إذا كان ذلك ضروريًا لتقديم الخدمة التي طلبتها (مثل التوصيل).
          </span>
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            للامتثال للقوانين واللوائح أو الاستجابة للإجراءات القانونية.
          </span>
        </p>
      </div>
      <div>
        <h5>5. ملفات تعريف الارتباط (Cookies)</h5>
        <p>
          يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم، وهي ملفات
          نصية صغيرة يتم تخزينها على جهازك. يمكنك تعديل إعدادات المتصفح لرفض
          <br />
          ملفات تعريف الارتباط، ولكن قد يؤثر ذلك على بعض وظائف الموقع.
        </p>
      </div>
      <div>
        <h5>6. حقوقك</h5>
        <p>
          لديك الحق في الوصول إلى معلوماتك الشخصية، وتحديثها، أو طلب حذفها،
          وفقًا للقوانين المعمول بها. إذا كنت ترغب في ممارسة أي من هذه الحقوق،
          يُرجى
          <br /> التواصل معنا عبر معلومات الاتصال المتوفرة أدناه.
        </p>
      </div>
      <div>
        <h5>7. روابط الطرف الثالث</h5>
        <p>
          قد يحتوي موقعنا على روابط لمواقع أخرى. نحن لسنا مسؤولين عن سياسات
          الخصوصية أو محتوى هذه المواقع، ونشجعك على مراجعة سياسات الخصوصية
          <br />
          الخاصة بأي موقع تزوره.
        </p>
      </div>
      <div>
        <h5>8. التغييرات على سياسة الخصوصية</h5>
        <p>
          قد نقوم بتحديث سياسة الخصوصية من وقت لآخر، لذا يُرجى مراجعتها بانتظام.
          سيتم نشر أي تغييرات على هذه الصفحة، وسيتم تحديث تاريخ التحديث أدناه.
          <br />
          آخر تحديث: 20/11/2024
        </p>
      </div>
      <div>
        <h5>9. التواصل معنا</h5>
        <p style={{ fontWeight: "bolder" }}>
          إذا كانت لديك أي استفسارات أو مخاوف بخصوص سياسة الخصوصية، يُرجى
          التواصل معنا عبر:
          <br />
          <span style={{ margin: "0px 5px 0px 5px", fontWeight: "lighter" }}>
            ✉️ البريد الإلكتروني: [
            <a
              style={{
                textDecoration: "none",
                color: "darkblue",
                fontWeight: "bolder",
              }}
              href="http://www.amgadfurniture202@gmail.com"
              target="blank"
            >
              amgadfurniture202@gmail.com
            </a>
            ]
          </span>
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            الهاتف: 01559007451
          </span>
          <br />
          <span style={{ fontWeight: "lighter", margin: "0px 10px 0px 10px" }}>
            العنوان: دمياط / شطا أمام الحمايه المدنية
          </span>
        </p>
      </div>
    </div>
  );
}
export default Policy;
