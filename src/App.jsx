import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './style.css';

const teamLogos = {
  'NRG': { bg: '#000000', text: 'NRG', color: '#00ffcc' },
  'T1': { bg: '#e4002b', text: 'T1', color: '#ffffff' },
  'Paper Rex': { bg: '#b800e6', text: 'PRX', color: '#ffffff' },
  'LOUD': { bg: '#00ff66', text: 'LLL', color: '#000000' },
  '100 Thieves': { bg: '#ff0000', text: '100T', color: '#ffffff' },
  'G2 Esports': { bg: '#333333', text: 'G2', color: '#ff4655' },
  'Team Vitality': { bg: '#fff000', text: 'VIT', color: '#000000' },
  'NS RedForce': { bg: '#de2010', text: 'NS', color: '#ffffff' }
};

const initialMatches = [

  {
    id: 'ubq1',
    round: 'Upper Quarterfinals',
    team1: { name: 'NRG', score: 2, isWinner: true },
    team2: { name: 'T1', score: 0, isWinner: false },
    mapScores: 'Haven (13-9), Sunset (13-7)',
    status: 'Selesai'
  },
  {
    id: 'ubq2',
    round: 'Upper Quarterfinals',
    team1: { name: 'Paper Rex', score: 0, isWinner: false },
    team2: { name: 'LOUD', score: 2, isWinner: true },
    mapScores: 'Ascent (8-13), Lotus (10-13)',
    status: 'Selesai'
  },
  {
    id: 'ubq3',
    round: 'Upper Quarterfinals',
    team1: { name: '100 Thieves', score: 0, isWinner: false },
    team2: { name: 'G2 Esports', score: 2, isWinner: true },
    mapScores: 'Bind (11-13), Breeze (9-13)',
    status: 'Selesai'
  },
  {
    id: 'ubq4',
    round: 'Upper Quarterfinals',
    team1: { name: 'Team Vitality', score: 2, isWinner: true },
    team2: { name: 'NS RedForce', score: 1, isWinner: false },
    mapScores: 'Icebox (13-8), Sunset (11-13), Split (13-10)',
    status: 'Selesai'
  },

  {
    id: 'ubs1',
    round: 'Upper Semifinals',
    team1: { name: 'NRG', score: 1, isWinner: false },
    team2: { name: 'LOUD', score: 2, isWinner: true },
    mapScores: 'Split (13-10), Sunset (7-13), Icebox (9-13)',
    status: 'Selesai'
  },
  {
    id: 'ubs2',
    round: 'Upper Semifinals',
    team1: { name: 'G2 Esports', score: 0, isWinner: false },
    team2: { name: 'Team Vitality', score: 2, isWinner: true },
    mapScores: 'Lotus (7-13), Breeze (10-13)',
    status: 'Selesai'
  },

  {
    id: 'ubf',
    round: 'Upper Final',
    team1: { name: 'LOUD', score: 2, isWinner: true },
    team2: { name: 'Team Vitality', score: 1, isWinner: false },
    mapScores: 'Ascent (13-11), Lotus (9-13), Haven (13-8)',
    status: 'Selesai'
  },

  {
    id: 'lbf',
    round: 'Lower Final',
    team1: { name: 'Team Vitality', score: 3, isWinner: true },
    team2: { name: '100 Thieves', score: 1, isWinner: false },
    mapScores: 'Haven (13-9), Sunset (8-13), Lotus (13-11), Bind (13-7)',
    status: 'Selesai'
  },

  {
    id: 'gf',
    round: 'Grand Final',
    team1: { name: 'LOUD', score: 3, isWinner: true },
    team2: { name: 'Team Vitality', score: 1, isWinner: false },
    mapScores: 'Lotus (13-7), Sunset (9-13), Ascent (13-10), Haven (13-8)',
    status: 'Selesai'
  }
];

function TeamRow({ team }) {
  const logo = teamLogos[team.name] || { bg: '#333', text: 'VCT', color: '#fff' };

  return (
    <div className={`team ${team.isWinner ? 'winner' : ''}`}>
      <div className="team-info">
        <div className="team-logo" style={{ backgroundColor: logo.bg, color: logo.color }}>
          {logo.text}
        </div>
        <span className="team-name">{team.name}</span>
      </div>
      <span className="team-score">{team.score}</span>
    </div>
  );
}

function MatchCard({ match }) {
  return (
    <Link to={`/match/${match.id}`} style={{ textDecoration: 'none' }}>
      <div className="match-card">
        <TeamRow team={match.team1} />
        <TeamRow team={match.team2} />
      </div>
    </Link>
  );
}

function BracketView({ matches }) {
  const upperQuarter = matches.filter(m => m.round === 'Upper Quarterfinals');
  const upperSemi = matches.filter(m => m.round === 'Upper Semifinals');
  const upperFinal = matches.filter(m => m.round === 'Upper Final');
  const lowerFinal = matches.filter(m => m.round === 'Lower Final');
  const grandFinal = matches.filter(m => m.round === 'Grand Final');

  return (
    <div className="bracket-container">
      <div className="round">
        <h3 className="round-title">Upper Quarterfinals</h3>
        {upperQuarter.map(m => <MatchCard key={m.id} match={m} />)}
      </div>

      <div className="round">
        <h3 className="round-title">Upper Semifinals</h3>
        {upperSemi.map(m => <MatchCard key={m.id} match={m} />)}
      </div>

      <div className="round">
        <h3 className="round-title">Upper Final</h3>
        {upperFinal.map(m => <MatchCard key={m.id} match={m} />)}
      </div>

      <div className="round">
        <h3 className="round-title">Lower Final</h3>
        {lowerFinal.map(m => <MatchCard key={m.id} match={m} />)}
      </div>

      <div className="round">
        <h3 className="round-title">Grand Final</h3>
        {grandFinal.map(m => <MatchCard key={m.id} match={m} />)}
      </div>
    </div>
  );
}

function MatchDetailView({ matches }) {
  const { id } = useParams();
  const match = matches.find(m => m.id === id);

  if (!match) {
    return <div className="match-detail"><h2>Match tidak ditemukan</h2></div>;
  }

  const logo1 = teamLogos[match.team1.name] || { bg: '#333', text: 'VCT', color: '#fff' };
  const logo2 = teamLogos[match.team2.name] || { bg: '#333', text: 'VCT', color: '#fff' };

  return (
    <div className="match-detail">
      <h2>{match.round}</h2>
      <span className="status-badge">● {match.status}</span>
      
      <div className="score-banner">
        <div className="team-box">
          <div className="team-logo-lg" style={{ backgroundColor: logo1.bg, color: logo1.color }}>
            {logo1.text}
          </div>
          <h3>{match.team1.name}</h3>
        </div>
        
        <div className="vs-score">
          {match.team1.score} - {match.team2.score}
        </div>
        
        <div className="team-box">
          <div className="team-logo-lg" style={{ backgroundColor: logo2.bg, color: logo2.color }}>
            {logo2.text}
          </div>
          <h3>{match.team2.name}</h3>
        </div>
      </div>

      <div className="map-list">
        <p><strong>Map Breakdown:</strong></p>
        <p style={{ marginTop: '8px', color: '#ff4655', fontWeight: '500' }}>{match.mapScores}</p>
      </div>

      <Link to="/" className="back-btn">← Kembali ke Bracket</Link>
    </div>
  );
}

export default function App() {
  const [matches] = useState(initialMatches);

  return (
    <Router>
      <nav className="navbar">
        <h1>
          <span style={{ color: '#EAB308', fontSize: '1.2rem' }}>VCT</span> CHAMPIONS SHANGHAI 2026
        </h1>
        <Link to="/">Bracket Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BracketView matches={matches} />} />
        <Route path="/match/:id" element={<MatchDetailView matches={matches} />} />
      </Routes>
    </Router>
  );
}