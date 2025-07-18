"use client";
import { motion } from "framer-motion";

interface CarAnimationProps {
  className?: string;
}

export function RoadAnimation({ className = "" }: CarAnimationProps) {
  const roadPath = "M-100,350 L900,350";
  
  const curvedRoadPath = "M620,0 L620,200 C620,220 610,240 600,260 C590,280 580,300 570,320 L570,450";
  const pathPoints = [
    { x: -100, y: 350, rotation: 0 },
    { x: 0, y: 350, rotation: 0 },
    { x: 100, y: 350, rotation: 0 },
    { x: 200, y: 350, rotation: 0 },
    { x: 300, y: 350, rotation: 0 },
    { x: 400, y: 350, rotation: 0 },
    { x: 500, y: 350, rotation: 0 },
    { x: 600, y: 350, rotation: 0 },
    { x: 700, y: 350, rotation: 0 },
    { x: 800, y: 350, rotation: 0 },
    { x: 900, y: 350, rotation: 0 },
  ];
  
  const curvedPathPoints = [
    { x: 620, y: 0, rotation: 90 },
    { x: 620, y: 50, rotation: 90 },
    { x: 620, y: 100, rotation: 90 },
    { x: 620, y: 150, rotation: 90 },
    { x: 620, y: 200, rotation: 90 },
    { x: 618, y: 210, rotation: 95 },
    { x: 615, y: 220, rotation: 100 },
    { x: 610, y: 230, rotation: 105 },
    { x: 605, y: 240, rotation: 110 },
    { x: 600, y: 250, rotation: 115 },
    { x: 595, y: 260, rotation: 120 },
    { x: 590, y: 270, rotation: 125 },
    { x: 585, y: 280, rotation: 130 },
    { x: 580, y: 290, rotation: 135 },
    { x: 575, y: 300, rotation: 140 },
    { x: 572, y: 310, rotation: 145 },
    { x: 570, y: 320, rotation: 150 },
    { x: 570, y: 340, rotation: 180 },
    { x: 570, y: 380, rotation: 180 },
    { x: 570, y: 420, rotation: 180 },
    { x: 570, y: 450, rotation: 180 },
  ];

  const ModernSedan = ({ color, delay = 0, speed = 1 }: { color: string; delay?: number; speed?: number }) => {
    return (
      <motion.g
        animate={{
          x: pathPoints.map(p => p.x),
          y: pathPoints.map(p => p.y),
          rotate: pathPoints.map(p => p.rotation),
        }}
        transition={{
          duration: 60 / speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          delay: delay,
        }}
        style={{ 
          transformOrigin: "center",
        }}
      >
        <g>
          <motion.ellipse 
            cx="0" 
            cy="5" 
            rx="12" 
            ry="2" 
            fill="rgba(0,0,0,0.2)"
            animate={{
              scaleX: [1, 1.1, 1],
              opacity: [0.2, 0.15, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <path
            d="M -10 3 C -10 4, -9 4.5, -7 4.5 L 7 4.5 C 9 4.5, 10 4, 10 3 L 10 0 C 10 -1, 9.5 -2, 8.5 -2.5 L 6 -3 C 5 -5.5, 2.5 -6.5, 0 -6.5 C -2.5 -6.5, -5 -5.5, -6 -3 L -8.5 -2.5 C -9.5 -2, -10 -1, -10 0 Z"
            fill={color}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.3"
          />
          
          <defs>
            <linearGradient id={`carGradient-${color}-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.1)" />
            </linearGradient>
          </defs>
          
          <path
            d="M -10 3 C -10 4, -9 4.5, -7 4.5 L 7 4.5 C 9 4.5, 10 4, 10 3 L 10 0 C 10 -1, 9.5 -2, 8.5 -2.5 L 6 -3 C 5 -5.5, 2.5 -6.5, 0 -6.5 C -2.5 -6.5, -5 -5.5, -6 -3 L -8.5 -2.5 C -9.5 -2, -10 -1, -10 0 Z"
            fill={`url(#carGradient-${color}-${delay})`}
            opacity="0.5"
          />
          
          <path
            d="M -3.5 -3 C -2.5 -5, -1 -5.5, 0 -5.5 C 1 -5.5, 2.5 -5, 3.5 -3 Z"
            fill="rgba(20,30,40,0.7)"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.2"
          />
          
          <path
            d="M -6 -1.5 C -6 -2.5, -5.5 -3, -4.5 -3 L -3.5 -3 C -3 -3, -2.5 -2.5, -2.5 -2 L -2.5 -0.5 C -2.5 0, -3 0.5, -3.5 0.5 L -5 0.5 C -5.5 0.5, -6 0, -6 -0.5 Z"
            fill="rgba(20,30,40,0.5)"
          />
          <path
            d="M 6 -1.5 C 6 -2.5, 5.5 -3, 4.5 -3 L 3.5 -3 C 3 -3, 2.5 -2.5, 2.5 -2 L 2.5 -0.5 C 2.5 0, 3 0.5, 3.5 0.5 L 5 0.5 C 5.5 0.5, 6 0, 6 -0.5 Z"
            fill="rgba(20,30,40,0.5)"
          />
          
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="-6" cy="4.5" r="2.2" fill="#1a1a1a" />
            <circle cx="-6" cy="4.5" r="1.8" fill="#2a2a2a" />
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <line
                key={i}
                x1={-6 + Math.cos(angle * Math.PI / 180) * 0.5}
                y1={4.5 + Math.sin(angle * Math.PI / 180) * 0.5}
                x2={-6 + Math.cos(angle * Math.PI / 180) * 1.5}
                y2={4.5 + Math.sin(angle * Math.PI / 180) * 1.5}
                stroke="#4a4a4a"
                strokeWidth="0.3"
              />
            ))}
            <circle cx="-6" cy="4.5" r="0.5" fill="#3a3a3a" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="6" cy="4.5" r="2.2" fill="#1a1a1a" />
            <circle cx="6" cy="4.5" r="1.8" fill="#2a2a2a" />
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <line
                key={i}
                x1={6 + Math.cos(angle * Math.PI / 180) * 0.5}
                y1={4.5 + Math.sin(angle * Math.PI / 180) * 0.5}
                x2={6 + Math.cos(angle * Math.PI / 180) * 1.5}
                y2={4.5 + Math.sin(angle * Math.PI / 180) * 1.5}
                stroke="#4a4a4a"
                strokeWidth="0.3"
              />
            ))}
            <circle cx="6" cy="4.5" r="0.5" fill="#3a3a3a" />
          </motion.g>
          
          <g>
            <ellipse cx="9.5" cy="0.5" rx="0.8" ry="1" fill="#E0F2FE" opacity="0.9" />
            <ellipse cx="9.5" cy="0.5" rx="1.2" ry="1.4" fill="#E0F2FE" opacity="0.3" />
          </g>
          
          <g>
            <rect x="-10" y="-0.5" width="0.5" height="2" rx="0.2" fill="#EF4444" opacity="0.9" />
            <rect x="-10.5" y="-0.5" width="1" height="2" rx="0.2" fill="#EF4444" opacity="0.3" />
          </g>
          
          <rect x="-3" y="0.5" width="1.5" height="0.3" rx="0.15" fill="rgba(255,255,255,0.2)" />
          <rect x="1.5" y="0.5" width="1.5" height="0.3" rx="0.15" fill="rgba(255,255,255,0.2)" />
        </g>
      </motion.g>
    );
  };

  const SportsCar = ({ color, delay = 0 }: { color: string; delay?: number }) => {
    return (
      <motion.g
        animate={{
          x: pathPoints.map(p => p.x),
          y: pathPoints.map(p => p.y),
          rotate: pathPoints.map(p => p.rotation),
        }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          delay: delay,
        }}
        style={{ 
          transformOrigin: "center",
        }}
      >
        <g>
          <motion.ellipse 
            cx="0" 
            cy="4" 
            rx="11" 
            ry="1.5" 
            fill="rgba(0,0,0,0.25)"
            animate={{
              scaleX: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <path
            d="M -9 2 C -9 2.5, -8.5 3, -6 3 L 6 3 C 8.5 3, 9 2.5, 9 2 L 9 -0.5 C 9 -1.5, 8.5 -2, 7.5 -2.5 L 5.5 -3 C 4.5 -4, 2 -4.5, 0 -4.5 C -2 -4.5, -4.5 -4, -5.5 -3 L -7.5 -2.5 C -8.5 -2, -9 -1.5, -9 -0.5 Z"
            fill={color}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.3"
          />
          
          <rect x="-1" y="-4" width="2" height="7" fill="rgba(255,255,255,0.2)" />
          
          <path
            d="M -4 -2.5 C -3 -3.5, -1 -4, 0 -4 C 1 -4, 3 -3.5, 4 -2.5 Z"
            fill="rgba(10,20,30,0.8)"
          />
          
          <path
            d="M -5.5 -1 C -5.5 -2, -5 -2.5, -4.5 -2.5 L -3.5 -2.5 C -3 -2.5, -2.5 -2, -2.5 -1.5 L -2.5 -0.5 C -2.5 0, -3 0, -3.5 0 L -5 0 C -5.5 0, -5.5 -0.5, -5.5 -1 Z"
            fill="rgba(10,20,30,0.6)"
          />
          <path
            d="M 5.5 -1 C 5.5 -2, 5 -2.5, 4.5 -2.5 L 3.5 -2.5 C 3 -2.5, 2.5 -2, 2.5 -1.5 L 2.5 -0.5 C 2.5 0, 3 0, 3.5 0 L 5 0 C 5.5 0, 5.5 -0.5, 5.5 -1 Z"
            fill="rgba(10,20,30,0.6)"
          />
          
          <motion.g
            animate={{ rotate: -720 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="-5.5" cy="3.5" r="2" fill="#0a0a0a" />
            <circle cx="-5.5" cy="3.5" r="1.6" fill="#1a1a1a" />
            <circle cx="-5.5" cy="3.5" r="0.4" fill="#2a2a2a" />
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <path
                key={i}
                d={`M ${-5.5 + Math.cos(angle * Math.PI / 180) * 0.4} ${3.5 + Math.sin(angle * Math.PI / 180) * 0.4} L ${-5.5 + Math.cos(angle * Math.PI / 180) * 1.4} ${3.5 + Math.sin(angle * Math.PI / 180) * 1.4}`}
                stroke="#3a3a3a"
                strokeWidth="0.4"
              />
            ))}
          </motion.g>
          
          <motion.g
            animate={{ rotate: -720 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="5.5" cy="3.5" r="2" fill="#0a0a0a" />
            <circle cx="5.5" cy="3.5" r="1.6" fill="#1a1a1a" />
            <circle cx="5.5" cy="3.5" r="0.4" fill="#2a2a2a" />
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <path
                key={i}
                d={`M ${5.5 + Math.cos(angle * Math.PI / 180) * 0.4} ${3.5 + Math.sin(angle * Math.PI / 180) * 0.4} L ${5.5 + Math.cos(angle * Math.PI / 180) * 1.4} ${3.5 + Math.sin(angle * Math.PI / 180) * 1.4}`}
                stroke="#3a3a3a"
                strokeWidth="0.4"
              />
            ))}
          </motion.g>
          
          <path
            d="M 8.5 -0.5 L 9 0 L 8.5 0.5 Z"
            fill="#60A5FA"
            opacity="0.9"
          />
          <path
            d="M 8 -0.5 L 9.5 0 L 8 0.5 Z"
            fill="#60A5FA"
            opacity="0.3"
          />
          
          <rect x="-8.5" y="-3" width="1" height="0.5" fill={color} opacity="0.8" />
          <rect x="-8.5" y="-3.5" width="2" height="0.5" fill={color} />
          
          <circle cx="-8.5" cy="1.5" r="0.4" fill="#374151" />
          <circle cx="-8.5" cy="0.5" r="0.4" fill="#374151" />
        </g>
      </motion.g>
    );
  };

  const SUV = ({ color, delay = 0 }: { color: string; delay?: number }) => {
    return (
      <motion.g
        animate={{
          x: curvedPathPoints.map(p => p.x),
          y: curvedPathPoints.map(p => p.y),
          rotate: curvedPathPoints.map(p => p.rotation),
        }}
        transition={{
          duration: 55,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          delay: delay,
        }}
        style={{ 
          transformOrigin: "center",
        }}
      >
        <g>
          <ellipse cx="0" cy="6" rx="13" ry="2" fill="rgba(0,0,0,0.2)" />
          
          <path
            d="M -10 4 C -10 5, -9 5.5, -7 5.5 L 7 5.5 C 9 5.5, 10 5, 10 4 L 10 -1 C 10 -2, 9.5 -3, 8.5 -3.5 L 6 -4 C 5 -6.5, 2.5 -7.5, 0 -7.5 C -2.5 -7.5, -5 -6.5, -6 -4 L -8.5 -3.5 C -9.5 -3, -10 -2, -10 -1 Z"
            fill={color}
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="0.3"
          />
          
          <path
            d="M -4 -3.5 C -3 -5.5, -1 -6.5, 0 -6.5 C 1 -6.5, 3 -5.5, 4 -3.5 Z"
            fill="rgba(20,30,40,0.7)"
          />
          
          <rect x="-6.5" y="-2.5" width="3" height="2.5" rx="0.3" fill="rgba(20,30,40,0.5)" />
          <rect x="3.5" y="-2.5" width="3" height="2.5" rx="0.3" fill="rgba(20,30,40,0.5)" />
          <rect x="-2.5" y="-2" width="2" height="2" rx="0.3" fill="rgba(20,30,40,0.5)" />
          <rect x="0.5" y="-2" width="2" height="2" rx="0.3" fill="rgba(20,30,40,0.5)" />
          
          <rect x="-8" y="-4" width="16" height="0.3" fill="rgba(100,100,100,0.8)" />
          <rect x="-6" y="-4.3" width="1" height="0.6" rx="0.3" fill="rgba(100,100,100,0.8)" />
          <rect x="5" y="-4.3" width="1" height="0.6" rx="0.3" fill="rgba(100,100,100,0.8)" />
          
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="-6" cy="5.5" r="2.5" fill="#1a1a1a" />
            <circle cx="-6" cy="5.5" r="2" fill="#2a2a2a" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x={-6 + Math.cos(angle * Math.PI / 180) * 1.8 - 0.2}
                y={5.5 + Math.sin(angle * Math.PI / 180) * 1.8 - 0.4}
                width="0.4"
                height="0.8"
                fill="#3a3a3a"
                transform={`rotate(${angle} ${-6} ${5.5})`}
              />
            ))}
            <circle cx="-6" cy="5.5" r="0.6" fill="#3a3a3a" />
          </motion.g>
          
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <circle cx="6" cy="5.5" r="2.5" fill="#1a1a1a" />
            <circle cx="6" cy="5.5" r="2" fill="#2a2a2a" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <rect
                key={i}
                x={6 + Math.cos(angle * Math.PI / 180) * 1.8 - 0.2}
                y={5.5 + Math.sin(angle * Math.PI / 180) * 1.8 - 0.4}
                width="0.4"
                height="0.8"
                fill="#3a3a3a"
                transform={`rotate(${angle} ${6} ${5.5})`}
              />
            ))}
            <circle cx="6" cy="5.5" r="0.6" fill="#3a3a3a" />
          </motion.g>
          
          <rect x="-4" y="-3.8" width="8" height="0.2" fill="#E0F2FE" opacity="0.8" />
          
          <circle cx="9" cy="0.5" r="0.8" fill="#FEF3C7" opacity="0.9" />
          <circle cx="9" cy="0.5" r="1.2" fill="#FEF3C7" opacity="0.3" />
          
          <circle cx="8.5" cy="2.5" r="0.5" fill="#FEF3C7" opacity="0.7" />
          
          <rect x="-10" y="-1" width="0.5" height="3" rx="0.2" fill="#DC2626" opacity="0.9" />
        </g>
      </motion.g>
    );
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-gray-800/5" />
      
      <svg
        width="100%"
        height="100%"
        viewBox="-100 0 1000 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(107, 114, 128, 0.5)" />
            <stop offset="50%" stopColor="rgba(107, 114, 128, 0.4)" />
            <stop offset="100%" stopColor="rgba(107, 114, 128, 0.5)" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <motion.path
          d={roadPath}
          stroke="url(#roadGradient)"
          strokeWidth="24"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" }
          }}
        />
        
        <motion.path
          d={roadPath}
          stroke="rgba(80, 80, 80, 0.1)"
          strokeWidth="24"
          fill="none"
          strokeDasharray="2,1"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            transition: { duration: 2.2, ease: "easeOut" }
          }}
        />
        
        <motion.path
          d={roadPath}
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="26"
          fill="none"
          strokeDasharray="20,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.8,
            transition: { duration: 2.5, ease: "easeOut" }
          }}
        />
        
        <motion.path
          d={roadPath}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="30,20"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            strokeDashoffset: [0, -50],
            transition: { 
              pathLength: { duration: 3, ease: "easeOut", delay: 0.5 },
              strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" }
            }
          }}
        />
        
        <motion.path
          d={curvedRoadPath}
          stroke="url(#roadGradient)"
          strokeWidth="24"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 2, ease: "easeOut", delay: 0.5 }
          }}
        />
        
        <motion.path
          d={curvedRoadPath}
          stroke="rgba(80, 80, 80, 0.1)"
          strokeWidth="24"
          fill="none"
          strokeDasharray="2,1"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            transition: { duration: 2.2, ease: "easeOut", delay: 0.5 }
          }}
        />
        
        <motion.path
          d={curvedRoadPath}
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="26"
          fill="none"
          strokeDasharray="20,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 0.8,
            transition: { duration: 2.5, ease: "easeOut", delay: 0.5 }
          }}
        />
        
        <motion.path
          d={curvedRoadPath}
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="30,20"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            strokeDashoffset: [0, -50],
            transition: { 
              pathLength: { duration: 3, ease: "easeOut", delay: 1 },
              strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" }
            }
          }}
        />
        
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {[200, 400, 600].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="280" x2={x} y2="260" stroke="rgba(100,100,100,0.5)" strokeWidth="2" />
              <circle cx={x} cy="260" r="3" fill="#FEF3C7" filter="url(#glow)" opacity="0.8" />
            </g>
          ))}
        </motion.g>
        
        <ModernSedan color="#1E293B" delay={0} speed={1} />
        <SportsCar color="#DC2626" delay={0} />
        <ModernSedan color="#FFFFFF" delay={20} speed={1} />
        <SportsCar color="#1D4ED8" delay={10} />
        <ModernSedan color="#6B7280" delay={30} speed={1} />
        
        <SUV color="#1F2937" delay={0} />
        <SUV color="#FFFFFF" delay={15} />
      </svg>
    </div>
  );
}