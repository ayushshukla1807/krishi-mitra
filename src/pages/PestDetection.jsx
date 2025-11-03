import React, { useState } from 'react';

const PestDetection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageUpload = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({
        disease: 'Tomato Late Blight',
        confidence: '95%',
        solution: 'Apply copper-based fungicide. Remove affected leaves. Improve air circulation.'
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>🐛 Pest & Disease Detection</h1>
        <p>AI-powered identification of crop diseases and pests</p>
      </div>

      <div className="card">
        <h2>Upload Crop Image</h2>
        <div style={{ textAlign: 'center', padding: '3rem', border: '2px dashed #ddd', borderRadius: '12px' }}>
          <div style={{ fontSize: '4rem', color: '#4caf50', marginBottom: '1rem' }}>🌿</div>
          <h3>Analyze Your Crop Health</h3>
          <p>Upload an image of affected leaves or plants for instant diagnosis</p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <button className="btn btn-primary" onClick={handleImageUpload} disabled={isAnalyzing}>
              {isAnalyzing ? 'Analyzing...' : 'Upload Image'}
            </button>
            <button className="btn btn-outline">
              Take Photo
            </button>
          </div>
        </div>
      </div>

      {isAnalyzing && (
        <div className="card">
          <div style={{ textAlign: 'center', padding: '2rem' }}>
            <div className="spinner" style={{ margin: '0 auto 1rem' }}></div>
            <h3>Analyzing Image...</h3>
            <p>Our AI is examining your crop image for diseases and pests</p>
          </div>
        </div>
      )}

      {result && (
        <div className="card">
          <h2>Detection Results</h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            <div>
              <h3 style={{ color: '#f44336' }}>Detected: {result.disease}</h3>
              <p><strong>Confidence:</strong> {result.confidence}</p>
            </div>
            <div>
              <h4>Recommended Solution</h4>
              <p>{result.solution}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PestDetection;
