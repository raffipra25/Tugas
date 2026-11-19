import React, { useState, useMemo } from 'react';
import { 
  Trophy, 
  Calendar, 
  Flame, 
  Swords, 
  Search, 
  X, 
  ChevronRight, 
  Play, 
  Award, 
  ShieldCheck, 
  Sparkles,
  Layers,
  Info,
  ExternalLink
} from 'lucide-react';

const TEAMS = {
  GENG: { name: 'Gen.G', code: 'GEN', region: 'PACIFIC', color: '#aa8a2e', logoBg: 'bg-yellow-900/40 text-yellow-400 border-yellow-500/50' },
  TH: { name: 'Team Heretics', code: 'TH', region: 'EMEA', color: '#e84040', logoBg: 'bg-red-900/40 text-red-400 border-red-500/50' },
  G2: { name: 'G2 Esports', code: 'G2', region: 'AMERICAS', color: '#e0e0e0', logoBg: 'bg-gray-800 text-gray-200 border-gray-400/50' },
  FNC: { name: 'Fnatic', code: 'FNC', region: 'EMEA', color: '#ff5900', logoBg: 'bg-orange-900/40 text-orange-400 border-orange-500/50' },
  PRX: { name: 'Paper Rex', code: 'PRX', region: 'PACIFIC', color: '#cf46f5', logoBg: 'bg-fuchsia-900/40 text-fuchsia-400 border-fuchsia-500/50' },
  T100: { name: '100 Thieves', code: '100T', region: 'AMERICAS', color: '#ff2b2b', logoBg: 'bg-red-950 text-red-500 border-red-600/50' },
  EDG: { name: 'EDward Gaming', code: 'EDG', region: 'CHINA', color: '#10b981', logoBg: 'bg-emerald-900/40 text-emerald-400 border-emerald-500/50' },
  FUT: { name: 'FUT Esports', code: 'FUT', region: 'EMEA', color: '#3b82f6', logoBg: 'bg-blue-900/40 text-blue-400 border-blue-500/50' },
};

const MATCHES = [
  {
    id: 'uqf1',
    stage: 'Upper Bracket',
    roundName: 'Upper Quarterfinals',
    date: 'May 30, 2024',
    team1: { ...TEAMS.T100, score: 2, isWinner: true },
    team2: { ...TEAMS.FUT, score: 1, isWinner: false },
    maps: [
      { name: 'Icebox', t1Score: 10, t2Score: 13, winner: 'FUT', pick: '100T' },
      { name: 'Sunset', t1Score: 13, t2Score: 8, winner: '100T', pick: 'FUT' },
      { name: 'Bind', t1Score: 13, t2Score: 11, winner: '100T', pick: 'Decider' }
    ],
    mvp: 'Asuna (100T)',
    vodUrl: '#'
  },
  {
    id: 'uqf2',
    stage: 'Upper Bracket',
    roundName: 'Upper Quarterfinals',
    date: 'May 30, 2024',
    team1: { ...TEAMS.PRX, score: 1, isWinner: false },
    team2: { ...TEAMS.G2, score: 2, isWinner: true },
    maps: [
      { name: 'Split', t1Score: 13, t2Score: 7, winner: 'PRX', pick: 'G2' },
      { name: 'Lotus', t1Score: 11, t2Score: 13, winner: 'G2', pick: 'PRX' },
      { name: 'Bind', t1Score: 10, t2Score: 13, winner: 'G2', pick: 'Decider' }
    ],
    mvp: 'trent (G2)',
    vodUrl: '#'
  },
  {
    id: 'uqf3',
    stage: 'Upper Bracket',
    roundName: 'Upper Quarterfinals',
    date: 'May 31, 2024',
    team1: { ...TEAMS.EDG, score: 0, isWinner: false },
    team2: { ...TEAMS.TH, score: 2, isWinner: true },
    maps: [
      { name: 'Sunset', t1Score: 6, t2Score: 13, winner: 'TH', pick: 'EDG' },
      { name: 'Lotus', t1Score: 8, t2Score: 13, winner: 'TH', pick: 'TH' }
    ],
    mvp: 'Wo0t (TH)',
    vodUrl: '#'
  },
  {
    id: 'uqf4',
    stage: 'Upper Bracket',
    roundName: 'Upper Quarterfinals',
    date: 'May 31, 2024',
    team1: { ...TEAMS.GENG, score: 2, isWinner: true },
    team2: { ...TEAMS.FNC, score: 1, isWinner: false },
    maps: [
      { name: 'Lotus', t1Score: 10, t2Score: 13, winner: 'FNC', pick: 'GEN' },
      { name: 'Breeze', t1Score: 13, t2Score: 10, winner: 'GEN', pick: 'FNC' },
      { name: 'Ascent', t1Score: 13, t2Score: 11, winner: 'GEN', pick: 'Decider' }
    ],
    mvp: 't3xture (GEN)',
    vodUrl: '#'
  },

  {
    id: 'usf1',
    stage: 'Upper Bracket',
    roundName: 'Upper Semifinals',
    date: 'June 2, 2024',
    team1: { ...TEAMS.T100, score: 0, isWinner: false },
    team2: { ...TEAMS.G2, score: 2, isWinner: true },
    maps: [
      { name: 'Haven', t1Score: 14, t2Score: 16, winner: 'G2', pick: '100T' },
      { name: 'Ascent', t1Score: 8, t2Score: 13, winner: 'G2', pick: 'G2' }
    ],
    mvp: 'valyn (G2)',
    vodUrl: '#'
  },
  {
    id: 'usf2',
    stage: 'Upper Bracket',
    roundName: 'Upper Semifinals',
    date: 'June 2, 2024',
    team1: { ...TEAMS.TH, score: 1, isWinner: false },
    team2: { ...TEAMS.GENG, score: 2, isWinner: true },
    maps: [
      { name: 'Lotus', t1Score: 3, t2Score: 13, winner: 'GEN', pick: 'TH' },
      { name: 'Sunset', t1Score: 13, t2Score: 5, winner: 'TH', pick: 'GEN' },
      { name: 'Breeze', t1Score: 11, t2Score: 13, winner: 'GEN', pick: 'Decider' }
    ],
    mvp: 'Karon (GEN)',
    vodUrl: '#'
  },

  {
    id: 'uf',
    stage: 'Upper Bracket',
    roundName: 'Upper Finals',
    date: 'June 7, 2024',
    team1: { ...TEAMS.G2, score: 0, isWinner: false },
    team2: { ...TEAMS.GENG, score: 2, isWinner: true },
    maps: [
      { name: 'Lotus', t1Score: 14, t2Score: 16, winner: 'GEN', pick: 'G2' },
      { name: 'Ascent', t1Score: 11, t2Score: 13, winner: 'GEN', pick: 'GEN' }
    ],
    mvp: 't3xture (GEN)',
    vodUrl: '#'
  },

  {
    id: 'lr1_1',
    stage: 'Lower Bracket',
    roundName: 'Lower Round 1',
    date: 'June 1, 2024',
    team1: { ...TEAMS.FUT, score: 0, isWinner: false },
    team2: { ...TEAMS.PRX, score: 2, isWinner: true },
    maps: [
      { name: 'Sunset', t1Score: 7, t2Score: 13, winner: 'PRX', pick: 'FUT' },
      { name: 'Bind', t1Score: 5, t2Score: 13, winner: 'PRX', pick: 'PRX' }
    ],
    mvp: 'something (PRX)',
    vodUrl: '#'
  },
  {
    id: 'lr1_2',
    stage: 'Lower Bracket',
    roundName: 'Lower Round 1',
    date: 'June 1, 2024',
    team1: { ...TEAMS.EDG, score: 0, isWinner: false },
    team2: { ...TEAMS.FNC, score: 2, isWinner: true },
    maps: [
      { name: 'Split', t1Score: 6, t2Score: 13, winner: 'FNC', pick: 'EDG' },
      { name: 'Lotus', t1Score: 4, t2Score: 13, winner: 'FNC', pick: 'FNC' }
    ],
    mvp: 'Derke (FNC)',
    vodUrl: '#'
  },

  {
    id: 'lqf1',
    stage: 'Lower Bracket',
    roundName: 'Lower Quarterfinals',
    date: 'June 3, 2024',
    team1: { ...TEAMS.TH, score: 2, isWinner: true },
    team2: { ...TEAMS.PRX, score: 1, isWinner: false },
    maps: [
      { name: 'Sunset', t1Score: 10, t2Score: 13, winner: 'PRX', pick: 'TH' },
      { name: 'Lotus', t1Score: 13, t2Score: 4, winner: 'TH', pick: 'PRX' },
      { name: 'Split', t1Score: 13, t2Score: 7, winner: 'TH', pick: 'Decider' }
    ],
    mvp: 'Riens (TH)',
    vodUrl: '#'
  },
  {
    id: 'lqf2',
    stage: 'Lower Bracket',
    roundName: 'Lower Quarterfinals',
    date: 'June 3, 2024',
    team1: { ...TEAMS.T100, score: 0, isWinner: false },
    team2: { ...TEAMS.FNC, score: 2, isWinner: true },
    maps: [
      { name: 'Bind', t1Score: 1, t2Score: 13, winner: 'FNC', pick: '100T' },
      { name: 'Lotus', t1Score: 10, t2Score: 13, winner: 'FNC', pick: 'FNC' }
    ],
    mvp: 'Chronicle (FNC)',
    vodUrl: '#'
  },

  {
    id: 'lsf',
    stage: 'Lower Bracket',
    roundName: 'Lower Semifinals',
    date: 'June 7, 2024',
    team1: { ...TEAMS.TH, score: 2, isWinner: true },
    team2: { ...TEAMS.FNC, score: 1, isWinner: false },
    maps: [
      { name: 'Icebox', t1Score: 13, t2Score: 11, winner: 'TH', pick: 'FNC' },
      { name: 'Lotus', t1Score: 9, t2Score: 13, winner: 'FNC', pick: 'TH' },
      { name: 'Breeze', t1Score: 13, t2Score: 11, winner: 'TH', pick: 'Decider' }
    ],
    mvp: 'benjyfishy (TH)',
    vodUrl: '#'
  },

  {
    id: 'lf',
    stage: 'Lower Bracket',
    roundName: 'Lower Finals',
    date: 'June 8, 2024',
    team1: { ...TEAMS.G2, score: 0, isWinner: false },
    team2: { ...TEAMS.TH, score: 3, isWinner: true },
    maps: [
      { name: 'Bind', t1Score: 2, t2Score: 13, winner: 'TH', pick: 'G2' },
      { name: 'Icebox', t1Score: 6, t2Score: 13, winner: 'TH', pick: 'TH' },
      { name: 'Lotus', t1Score: 8, t2Score: 13, winner: 'TH', pick: 'G2' }
    ],
    mvp: 'Wo0t (TH)',
    vodUrl: '#'
  },

  {
    id: 'gf',
    stage: 'Grand Finals',
    roundName: 'Grand Finals (BO5)',
    date: 'June 9, 2024',
    team1: { ...TEAMS.GENG, score: 3, isWinner: true },
    team2: { ...TEAMS.TH, score: 2, isWinner: false },
    maps: [
      { name: 'Breeze', t1Score: 13, t2Score: 6, winner: 'GEN', pick: 'TH' },
      { name: 'Sunset', t1Score: 9, t2Score: 13, winner: 'TH', pick: 'GEN' },
      { name: 'Icebox', t1Score: 9, t2Score: 13, winner: 'TH', pick: 'TH' },
      { name: 'Lotus', t1Score: 13, t2Score: 4, winner: 'GEN', pick: 'GEN' },
      { name: 'Ascent', t1Score: 13, t2Score: 8, winner: 'GEN', pick: 'Decider' }
    ],
    mvp: 't3xture (Gen.G)',
    isChampionMatch: true,
    vodUrl: '#'
  }
];

function TeamLogoBadge({ team, size = 'md' }) {
  const sizeClasses = size === 'sm' ? 'w-6 h-6 text-xs' : size === 'lg' ? 'w-10 h-10 text-sm' : 'w-7 h-7 text-xs';
  return (
    <div className={`${sizeClasses} ${team.logoBg} border rounded flex items-center justify-center font-bold font-mono tracking-tighter shrink-0`}>
      {team.code}
    </div>
  );
}

function MatchNodeCard({ match, onSelect, isHighlighted }) {
  const isGrandFinal = match.isChampionMatch;

  return (
    <div 
      onClick={() => onSelect(match)}
      className={`relative group cursor-pointer transition-all duration-200 rounded-md border bg-[#171d25] hover:border-[#ff4655] ${
        isHighlighted ? 'border-[#ff4655] shadow-lg shadow-[#ff4655]/20 ring-1 ring-[#ff4655]' : 'border-gray-800'
      } ${isGrandFinal ? 'bg-gradient-to-br from-[#1a2332] via-[#171d25] to-[#251b24] border-yellow-500/60' : ''}`}
    >
      <div className="flex items-center justify-between px-3 py-1 bg-[#10141b] border-b border-gray-800/80 rounded-t-md text-[10px] text-gray-400 font-mono">
        <span className="truncate max-w-[140px] font-semibold tracking-wider text-gray-400 uppercase">{match.roundName}</span>
        {isGrandFinal ? (
          <span className="flex items-center gap-1 text-yellow-400 font-bold px-1.5 py-0.5 bg-yellow-500/10 rounded">
            <Trophy className="w-3 h-3 text-yellow-400" /> CHAMPIONSHIP
          </span>
        ) : (
          <span className="text-gray-500">{match.date}</span>
        )}
      </div>

      <div className="p-2.5 space-y-1.5">
        <div className={`flex items-center justify-between p-1.5 rounded transition-colors ${
          match.team1.isWinner ? 'bg-[#222b37] text-white font-bold' : 'bg-[#12161f]/60 text-gray-400 opacity-80'
        }`}>
          <div className="flex items-center gap-2 overflow-hidden">
            <TeamLogoBadge team={match.team1} size="sm" />
            <span className="truncate text-xs font-semibold tracking-tight">{match.team1.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`text-xs px-2 py-0.5 font-mono rounded ${
              match.team1.isWinner ? 'bg-[#ff4655] text-white font-black' : 'bg-gray-800 text-gray-400'
            }`}>
              {match.team1.score}
            </span>
          </div>
        </div>

        <div className={`flex items-center justify-between p-1.5 rounded transition-colors ${
          match.team2.isWinner ? 'bg-[#222b37] text-white font-bold' : 'bg-[#12161f]/60 text-gray-400 opacity-80'
        }`}>
          <div className="flex items-center gap-2 overflow-hidden">
            <TeamLogoBadge team={match.team2} size="sm" />
            <span className="truncate text-xs font-semibold tracking-tight">{match.team2.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`text-xs px-2 py-0.5 font-mono rounded ${
              match.team2.isWinner ? 'bg-[#ff4655] text-white font-black' : 'bg-gray-800 text-gray-400'
            }`}>
              {match.team2.score}
            </span>
          </div>
        </div>
      </div>

      <div className="px-2 py-1 bg-[#12161f] rounded-b-md flex items-center justify-between text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Click for Map Breakdown</span>
        <ChevronRight className="w-3 h-3 text-[#ff4655]" />
      </div>
    </div>
  );
}

function MatchDetailModal({ match, onClose }) {
  if (!match) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#141a22] border border-[#ff4655]/40 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 bg-[#0d1117] border-b border-gray-800">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-[#ff4655]" />
            <span className="font-mono text-sm font-bold text-gray-300 uppercase tracking-widest">{match.stage} • {match.roundName}</span>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 bg-gradient-to-b from-[#1b232e] to-[#141a22] border-b border-gray-800">
          <div className="flex items-center justify-around">
            <div className="flex flex-col items-center gap-2 text-center w-1/3">
              <TeamLogoBadge team={match.team1} size="lg" />
              <div>
                <h3 className="font-bold text-white text-base leading-tight">{match.team1.name}</h3>
                <span className="text-xs text-gray-400 font-mono">{match.team1.region}</span>
              </div>
              {match.team1.isWinner && (
                <span className="text-[10px] bg-[#ff4655]/20 text-[#ff4655] border border-[#ff4655]/40 px-2 py-0.5 rounded font-bold uppercase">WINNER</span>
              )}
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-3 font-mono text-3xl font-black">
                <span className={match.team1.isWinner ? 'text-white' : 'text-gray-500'}>{match.team1.score}</span>
                <span className="text-[#ff4655] text-xl">:</span>
                <span className={match.team2.isWinner ? 'text-white' : 'text-gray-500'}>{match.team2.score}</span>
              </div>
              <span className="text-xs font-mono text-gray-400 mt-1">{match.date}</span>
            </div>

            <div className="flex flex-col items-center gap-2 text-center w-1/3">
              <TeamLogoBadge team={match.team2} size="lg" />
              <div>
                <h3 className="font-bold text-white text-base leading-tight">{match.team2.name}</h3>
                <span className="text-xs text-gray-400 font-mono">{match.team2.region}</span>
              </div>
              {match.team2.isWinner && (
                <span className="text-[10px] bg-[#ff4655]/20 text-[#ff4655] border border-[#ff4655]/40 px-2 py-0.5 rounded font-bold uppercase">WINNER</span>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#ff4655]" /> MAP BREAKDOWN SCOREBOARD
          </h4>

          <div className="space-y-2">
            {match.maps.map((map, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-[#0d1117] rounded-md border border-gray-800">
                <div className="flex items-center gap-3 w-1/3">
                  <span className="font-mono text-xs text-gray-500">MAP {idx + 1}</span>
                  <span className="font-bold text-sm text-gray-200">{map.name}</span>
                  {map.pick !== 'Decider' && (
                    <span className="text-[9px] bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded font-mono">
                      {map.pick} PICK
                    </span>
                  )}
                </div>

                <div className="font-mono text-sm font-bold flex items-center gap-4">
                  <span className={map.t1Score > map.t2Score ? 'text-[#ff4655]' : 'text-gray-400'}>{map.t1Score}</span>
                  <span className="text-gray-600 text-xs">-</span>
                  <span className={map.t2Score > map.t1Score ? 'text-[#ff4655]' : 'text-gray-400'}>{map.t2Score}</span>
                </div>

                <div className="w-1/3 text-right">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded">
                    WON BY {map.winner}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#221c25] to-[#171d25] rounded-md border border-yellow-500/30">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-xs font-bold text-yellow-300 uppercase">Match MVP:</span>
            </div>
            <span className="font-mono font-bold text-white text-sm">{match.mvp}</span>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-3 bg-[#0d1117] border-t border-gray-800">
          <span className="text-xs text-gray-500 font-mono">VCT Champions Shanghai 2024</span>
          <button 
            onClick={onClose}
            className="px-4 py-1.5 bg-[#ff4655] hover:bg-[#e03e4d] text-white text-xs font-bold rounded uppercase transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}

function GroupStageOverview() {
  const groups = [
    {
      name: 'Group A',
      teams: [
        { name: 'EDward Gaming', record: '2 - 0', qualified: true },
        { name: 'FUT Esports', record: '2 - 1', qualified: true },
        { name: 'Leviatán', record: '1 - 2', qualified: false },
        { name: 'T1', record: '0 - 2', qualified: false },
      ]
    },
    {
      name: 'Group B',
      teams: [
        { name: 'Fnatic', record: '2 - 0', qualified: true },
        { name: 'Paper Rex', record: '2 - 1', qualified: true },
        { name: 'FunPlus Phoenix', record: '1 - 2', qualified: false },
        { name: 'Team Heretics', record: 'Direct Playoff Seed', qualified: true },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="p-4 bg-[#141a22] border border-gray-800 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Info className="w-5 h-5 text-[#ff4655]" />
          <p className="text-xs text-gray-300">
            Top seeds from VCT Stage 1 leagues (100T, PRX, G2, EDG) earned direct placement into the <span className="text-yellow-400 font-semibold">Playoffs Upper Bracket Quarterfinals</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group, idx) => (
          <div key={idx} className="bg-[#141a22] border border-gray-800 rounded-lg overflow-hidden">
            <div className="px-4 py-3 bg-[#0d1117] border-b border-gray-800 font-bold text-sm text-[#ff4655] flex items-center justify-between">
              <span>{group.name} Swiss Stage</span>
              <span className="text-xs text-gray-500 font-mono">Shanghai 2024</span>
            </div>
            <div className="p-4 space-y-2">
              {group.teams.map((t, tidx) => (
                <div key={tidx} className="flex items-center justify-between p-2.5 bg-[#18202b] rounded border border-gray-800/80">
                  <span className="font-semibold text-sm text-gray-200">{t.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gray-400">{t.record}</span>
                    {t.qualified ? (
                      <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded font-bold">PLAYOFFS</span>
                    ) : (
                      <span className="text-[10px] bg-red-950 text-red-400 border border-red-900 px-2 py-0.5 rounded font-bold">ELIMINATED</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('playoffs'); 
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const matchMap = useMemo(() => {
    const map = {};
    MATCHES.forEach(m => { map[m.id] = m; });
    return map;
  }, []);

  const isMatchHighlighted = (match) => {
    if (!searchQuery.trim()) return false;
    const query = searchQuery.toLowerCase();
    return match.team1.name.toLowerCase().includes(query) || 
           match.team2.name.toLowerCase().includes(query) ||
           match.roundName.toLowerCase().includes(query);
  };

  return (
    <div className="min-h-screen bg-[#0b0e13] text-gray-100 font-sans antialiased selection:bg-[#ff4655] selection:text-white">
      <header className="sticky top-0 z-40 bg-[#0d1117]/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#ff4655] rounded flex items-center justify-center font-black text-black shadow-lg shadow-[#ff4655]/30">
              VCT
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-wider uppercase text-white font-mono">
                  VCT CHAMPIONS SHANGHAI 2024
                </h1>
                <span className="bg-[#ff4655]/20 text-[#ff4655] border border-[#ff4655]/30 text-[10px] px-2 py-0.5 rounded font-bold font-mono">
                  PLAYOFFS
                </span>
              </div>
              <p className="text-xs text-gray-400 font-mono">May 23 - June 9, 2024 • Mercedes-Benz Arena, Shanghai</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Highlight team (e.g. Gen.G)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-44 sm:w-56 pl-9 pr-3 py-1.5 bg-[#161c24] border border-gray-800 rounded-md text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#ff4655] transition-colors"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex bg-[#161c24] p-1 rounded-md border border-gray-800 text-xs font-bold">
              <button 
                onClick={() => setActiveTab('playoffs')}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === 'playoffs' ? 'bg-[#ff4655] text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Playoff Bracket
              </button>
              <button 
                onClick={() => setActiveTab('groups')}
                className={`px-3 py-1.5 rounded transition-all ${
                  activeTab === 'groups' ? 'bg-[#ff4655] text-white shadow' : 'text-gray-400 hover:text-white'
                }`}
              >
                Swiss Stage
              </button>
            </div>
          </div>

        </div>
      </header>

      <main className="max-w-[1500px] mx-auto p-4 sm:p-6">

        <div className="mb-6 p-4 sm:p-6 bg-gradient-to-r from-[#171d26] via-[#221c17] to-[#171d26] border border-yellow-500/40 rounded-lg shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 text-yellow-500 pointer-events-none">
            <Trophy className="w-64 h-64" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 bg-yellow-500/20 border-2 border-yellow-500 rounded-full flex items-center justify-center shrink-0">
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-yellow-400 tracking-widest uppercase">VCT SHANGHAI CHAMPIONS</span>
                <h2 className="text-2xl font-black text-white tracking-wide">Gen.G Esports</h2>
                <p className="text-xs text-gray-400">Defeated Team Heretics 3 - 2 in Grand Finals</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-[#0f141c] p-2.5 rounded-md border border-gray-800 text-xs font-mono">
              <div className="text-right">
                <span className="text-gray-400 block">GRAND FINALS MVP</span>
                <span className="text-yellow-400 font-bold text-sm">t3xture</span>
              </div>
              <Award className="w-6 h-6 text-yellow-400" />
            </div>
          </div>
        </div>

        {activeTab === 'groups' ? (
          <GroupStageOverview />
        ) : (
          <div className="space-y-10 overflow-x-auto pb-8">

            <section className="space-y-4 min-w-[1000px]">
              <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
                <ShieldCheck className="w-5 h-5 text-[#ff4655]" />
                <h2 className="font-mono text-base font-bold text-white uppercase tracking-wider">UPPER BRACKET</h2>
              </div>

              <div className="grid grid-cols-4 gap-6 items-center">
                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold text-gray-400 uppercase text-center bg-[#131922] py-1 rounded border border-gray-800">
                    Quarterfinals
                  </h3>
                  <MatchNodeCard match={matchMap.uqf1} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.uqf1)} />
                  <MatchNodeCard match={matchMap.uqf2} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.uqf2)} />
                  <MatchNodeCard match={matchMap.uqf3} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.uqf3)} />
                  <MatchNodeCard match={matchMap.uqf4} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.uqf4)} />
                </div>

                <div className="space-y-12">
                  <h3 className="text-xs font-mono font-bold text-gray-400 uppercase text-center bg-[#131922] py-1 rounded border border-gray-800">
                    Semifinals
                  </h3>
                  <div className="space-y-16">
                    <MatchNodeCard match={matchMap.usf1} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.usf1)} />
                    <MatchNodeCard match={matchMap.usf2} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.usf2)} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold text-gray-400 uppercase text-center bg-[#131922] py-1 rounded border border-gray-800">
                    Upper Final
                  </h3>
                  <MatchNodeCard match={matchMap.uf} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.uf)} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold text-yellow-400 uppercase text-center bg-yellow-500/10 py-1 rounded border border-yellow-500/30">
                    Grand Finals
                  </h3>
                  <MatchNodeCard match={matchMap.gf} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.gf)} />
                </div>
              </div>
            </section>

            <section className="space-y-4 min-w-[1000px] pt-4">
              <div className="flex items-center gap-2 border-b border-gray-800 pb-2">
                <Flame className="w-5 h-5 text-orange-500" />
                <h2 className="font-mono text-base font-bold text-white uppercase tracking-wider">LOWER BRACKET</h2>
              </div>

              <div className="grid grid-cols-4 gap-6 items-center">
                <div className="space-y-8">
                  <h3 className="text-xs font-mono font-bold text-gray-400 uppercase text-center bg-[#131922] py-1 rounded border border-gray-800">
                    Lower Round 1
                  </h3>
                  <div className="space-y-12">
                    <MatchNodeCard match={matchMap.lr1_1} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.lr1_1)} />
                    <MatchNodeCard match={matchMap.lr1_2} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.lr1_2)} />
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xs font-mono font-bold text-gray-400 uppercase text-center bg-[#131922] py-1 rounded border border-gray-800">
                    Lower Quarterfinals
                  </h3>
                  <div className="space-y-12">
                    <MatchNodeCard match={matchMap.lqf1} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.lqf1)} />
                    <MatchNodeCard match={matchMap.lqf2} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.lqf2)} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold text-gray-400 uppercase text-center bg-[#131922] py-1 rounded border border-gray-800">
                    Lower Semifinal
                  </h3>
                  <MatchNodeCard match={matchMap.lsf} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.lsf)} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-xs font-mono font-bold text-gray-400 uppercase text-center bg-[#131922] py-1 rounded border border-gray-800">
                    Lower Final
                  </h3>
                  <MatchNodeCard match={matchMap.lf} onSelect={setSelectedMatch} isHighlighted={isMatchHighlighted(matchMap.lf)} />
                </div>
              </div>
            </section>

          </div>
        )}
      </main>

      <MatchDetailModal 
        match={selectedMatch} 
        onClose={() => setSelectedMatch(null)} 
      />
    </div>
  );
}