import sys
import os
sys.stdout.reconfigure(encoding='utf-8')
from pathlib import Path
sys.path.append(str(Path(__file__).parent / 'scripts'))
import joblib
import pandas as pd

p = joblib.load('models/preprocessor.pkl')
m = joblib.load('models/trained_models.pkl')

df = pd.read_csv('data/dowry_dataset.csv').head(3)
df_derived = p.create_derived_features(df)
df_trans = p.apply_domain_transformation(df_derived)
df_adv = p.create_advanced_features(df_trans)
X_proc = p.preprocessor.transform(df_adv)

actuals = df['dowry'].values

print("="*60)
for i in range(len(actuals)):
    print(f"Row {i+1}: Actual=Rs.{actuals[i]:,} | NN={int(m['neural_net'].predict(X_proc)[i]):,} | Ensemble=Rs.{int(m['ensemble_model'].predict(X_proc)[i]):,}" if m.get('neural_net') is not None else f"Row {i+1}: Actual=Rs.{actuals[i]:,} | NN=unavailable | Ensemble=Rs.{int(m['ensemble_model'].predict(X_proc)[i]):,}")
print("="*60)
