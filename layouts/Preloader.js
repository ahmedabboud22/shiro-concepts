"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true); // حالة للتحكم بظهور المكون

  useEffect(() => {
    // تعيين مؤقت لإخفاء المكون بعد 1.5 ثانية
    const timeout = setTimeout(() => {
      setIsVisible(false); // إخفاء المكون
    }, 2000);

    return () => clearTimeout(timeout); // تنظيف المؤقت عند إلغاء المكون
  }, []);

  // إذا كانت الحالة false، لا يتم عرض المكون
  if (!isVisible) return null;

  const videoStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 1000, // لضمان أن الفيديو يبقى في الخلفية
  };

  return (
    <div className="mil-preloader">
      <div className="mil-load" />
      <p className="h2 mil-mb-30">
        <video autoPlay muted loop style={videoStyles}>
          <source src="/video/Logo starter.mp4" type="video/mp4" />
          {/* يمكنك إضافة صيغة فيديو أخرى لضمان التوافق */}
          Your browser does not support the video tag.
        </video>
      </p>
    </div>
  );
};

export default Preloader;
